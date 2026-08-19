import fs from 'fs';
import https from 'https';
import path from 'path';

const studioTargets = [
  { key: 'innova-crysta.jpg', query: 'Innova Crysta', title: 'File:2018 Toyota Innova Crysta 2.4 GX (AN140).jpg' },
  { key: 'innova.jpg', query: 'Toyota Innova', title: 'File:2014 Toyota Innova 2.0 G (AN40).jpg' },
  { key: 'ertiga.jpg', query: 'Suzuki Ertiga', title: 'File:2019 Suzuki Ertiga GLX 1.5 (NC11S).jpg' },
  { key: 'dzire.jpg', query: 'Suzuki Dzire', title: 'File:2018 Suzuki Dzire GLX 1.2 (NC11S).jpg' },
  { key: 'etios.jpg', query: 'Toyota Etios', title: 'File:Toyota Etios Sedan (rear), Curitiba.jpg' },
  { key: 'urbania.jpg', query: 'Luxury Van', title: 'File:2018 Mercedes-Benz Sprinter 314 CDi 2.1 Front.jpg' },
  { key: 'bus-22.jpg', query: 'Minibus', title: 'File:2017 Isuzu NLR 85 Mini Bus Front.jpg' },
  { key: 'bus-28.jpg', query: 'Tourist Bus', title: 'File:2016 Scania K360IB Touring HD 12.1m.jpg' }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MahithiTravelApp/2.0 (contact@mahithi.com)' } }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        try { resolve(JSON.parse(b)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MahithiTravelApp/2.0 (contact@mahithi.com)' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBinary(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => stream.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const item of studioTargets) {
    try {
      console.log(`Fetching 1280px high-res commercial photo for ${item.key}...`);
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
      const infoRes = await getJson(infoUrl);
      const pages = infoRes.query.pages;
      const pageKey = Object.keys(pages)[0];
      
      let directUrl;
      if (pageKey !== '-1' && pages[pageKey].imageinfo && pages[pageKey].imageinfo[0]) {
        directUrl = pages[pageKey].imageinfo[0].thumburl || pages[pageKey].imageinfo[0].url;
      } else {
        console.log(`Title search backup for ${item.query}...`);
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(item.query)}&srnamespace=6&format=json`;
        const searchRes = await getJson(searchUrl);
        const first = searchRes.query.search[0];
        const subInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(first.title)}&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
        const subRes = await getJson(subInfoUrl);
        const subPages = subRes.query.pages;
        const subKey = Object.keys(subPages)[0];
        directUrl = subPages[subKey].imageinfo[0].thumburl || subPages[subKey].imageinfo[0].url;
      }

      console.log('Selected High-Res URL:', directUrl);
      const dest = path.join(targetDir, item.key);
      await downloadBinary(directUrl, dest);
      const stat = fs.statSync(dest);
      const buf = fs.readFileSync(dest);
      console.log(`✓ HIGH-RES SUCCESS for ${item.key}: ${stat.size} bytes, magic: ${buf.slice(0, 4).toString('hex')}\n`);
    } catch (e) {
      console.error(`x ERROR for ${item.key}:`, e.message);
    }
  }
}

run();
