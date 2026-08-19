import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Exact Wikimedia Commons files for Indian market models
const authenticCars = [
  {
    filename: 'innova-crysta.jpg',
    wikiFile: '2018_Toyota_Innova_Crysta_2.4_GX_%28AN140%29.jpg',
    model: 'Toyota Innova Crysta'
  },
  {
    filename: 'innova.jpg',
    wikiFile: '2014_Toyota_Innova_2.0_G_%28AN40%29.jpg',
    model: 'Toyota Innova'
  },
  {
    filename: 'ertiga.jpg',
    wikiFile: '2019_Suzuki_Ertiga_GLX_1.5_%28NC11S%29.jpg',
    model: 'Maruti Suzuki Ertiga'
  },
  {
    filename: 'dzire.jpg',
    wikiFile: '2018_Suzuki_Dzire_GLX_1.2_%28NC11S%29.jpg',
    model: 'Maruti Suzuki Swift Dzire'
  },
  {
    filename: 'etios.jpg',
    wikiFile: 'Toyota_Etios_Sedan.jpg',
    model: 'Toyota Etios'
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

authenticCars.forEach(item => {
  const dest = path.join(targetDir, item.filename);
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${item.wikiFile}?width=800`;
  console.log(`Downloading authentic image for ${item.model} (${item.filename})...`);
  const cmd = `curl.exe -s -L -A "MahithiTravel/1.0" "${url}" -o "${dest}"`;
  try {
    execSync(cmd);
    const sz = fs.statSync(dest).size;
    const buf = fs.readFileSync(dest);
    const magic = buf.slice(0, 4).toString('hex');
    console.log(`-> Saved ${item.filename} (${sz} bytes, magic: ${magic})`);
  } catch (err) {
    console.error(`Failed to download ${item.filename}:`, err.message);
  }
});
