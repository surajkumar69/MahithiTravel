import fs from 'fs';
import https from 'https';
import path from 'path';

const searchQueries = [
  { key: 'innova-crysta.jpg', query: 'Innova Crysta' },
  { key: 'innova.jpg', query: 'Toyota Innova' },
  { key: 'ertiga.jpg', query: 'Suzuki Ertiga' },
  { key: 'dzire.jpg', query: 'Suzuki Dzire' },
  { key: 'etios.jpg', query: 'Toyota Etios' }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MahithiTravel/1.0 (contact@mahithi.com)' } }, res => {
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
    https.get(url, { headers: { 'User-Agent': 'MahithiTravel/1.0 (contact@mahithi.com)' } }, res => {
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
  for (const item of searchQueries) {
    try {
      const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(item.query)}&srnamespace=6&format=json`;
      const res = await getJson(searchUrl);
      const firstResult = res.query.search[0];
      if (!firstResult) {
        console.error('No search result for:', item.query);
        continue;
      }
      console.log(`Found file for "${item.query}":`, firstResult.title);

      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(firstResult.title)}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
      const infoRes = await getJson(infoUrl);
      const pages = infoRes.query.pages;
      const pageKey = Object.keys(pages)[0];
      const imgInfo = pages[pageKey].imageinfo[0];
      const directUrl = imgInfo.thumburl || imgInfo.url;

      console.log('Direct image URL:', directUrl);
      const dest = path.join(targetDir, item.key);
      await downloadBinary(directUrl, dest);
      const stat = fs.statSync(dest);
      const buf = fs.readFileSync(dest);
      console.log(`✓ SUCCESS for ${item.key}: ${stat.size} bytes, magic: ${buf.slice(0, 4).toString('hex')}\n`);
    } catch (e) {
      console.error(`x ERROR for ${item.key}:`, e.message);
    }
  }
}

run();
