import fs from 'fs';
import https from 'https';
import path from 'path';

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
  const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:ToyotaEtios-Tandil.jpg&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
  const infoRes = await getJson(infoUrl);
  const pages = infoRes.query.pages;
  const pageKey = Object.keys(pages)[0];
  const directUrl = pages[pageKey].imageinfo[0].thumburl || pages[pageKey].imageinfo[0].url;
  console.log('Etios Exterior Direct URL:', directUrl);

  const dest = path.join(targetDir, 'etios.jpg');
  await downloadBinary(directUrl, dest);
  const stat = fs.statSync(dest);
  console.log(`✓ Etios exterior saved (${stat.size} bytes)`);
}

run();
