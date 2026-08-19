import fs from 'fs';
import https from 'https';
import path from 'path';

const files = [
  { name: 'innova-crysta.jpg', title: 'File:2018_Toyota_Innova_Crysta_2.4_GX_(AN140).jpg' },
  { name: 'innova.jpg', title: 'File:2014_Toyota_Innova_2.0_G_(AN40).jpg' },
  { name: 'ertiga.jpg', title: 'File:2019_Suzuki_Ertiga_GLX_1.5_(NC11S).jpg' },
  { name: 'dzire.jpg', title: 'File:2018_Suzuki_Dzire_GLX_1.2_(NC11S).jpg' },
  { name: 'etios.jpg', title: 'File:Toyota_Etios_Sedan.jpg' }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MahithiTravelApp/1.0 (contact@mahithi.com)' } }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MahithiTravelApp/1.0 (contact@mahithi.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBinary(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => fileStream.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of files) {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
    try {
      console.log('Querying API for:', item.title);
      const data = await getJson(apiUrl);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      const imgUrl = pages[pageId].imageinfo[0].thumburl || pages[pageId].imageinfo[0].url;
      console.log('Found image URL:', imgUrl);
      
      const dest = path.join(targetDir, item.name);
      await downloadBinary(imgUrl, dest);
      const stat = fs.statSync(dest);
      const buf = fs.readFileSync(dest);
      console.log(`✓ Saved ${item.name}: ${stat.size} bytes, magic: ${buf.slice(0, 4).toString('hex')}`);
    } catch (e) {
      console.error('Failed:', item.name, e.message);
    }
  }
}

run();
