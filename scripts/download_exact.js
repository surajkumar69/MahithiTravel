import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const vehicles = [
  {
    name: 'innova-crysta.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2018_Toyota_Innova_Crysta_2.4_GX_%28AN140%29.jpg?width=800'
  },
  {
    name: 'innova.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2014_Toyota_Innova_2.0_G_%28AN40%29.jpg?width=800'
  },
  {
    name: 'ertiga.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2019_Suzuki_Ertiga_GLX_1.5_%28NC11S%29.jpg?width=800'
  },
  {
    name: 'dzire.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/2018_Suzuki_Dzire_GLX_1.2_%28NC11S%29.jpg?width=800'
  },
  {
    name: 'etios.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Etios_Sedan.jpg?width=800'
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

vehicles.forEach(item => {
  const dest = path.join(targetDir, item.name);
  const cmd = `curl.exe -s -L -A "MahithiTravel/1.0" "${item.url}" -o "${dest}"`;
  console.log('Downloading exact vehicle model:', item.name);
  try {
    execSync(cmd);
    const sz = fs.statSync(dest).size;
    console.log('Finished:', item.name, 'Size:', sz, 'bytes');
  } catch (err) {
    console.error('Error downloading:', item.name, err.message);
  }
});
