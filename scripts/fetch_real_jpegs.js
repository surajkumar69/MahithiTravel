import fs from 'fs';
import https from 'https';
import http from 'http';
import path from 'path';

// Direct working JPEG sources for each exact model
const sources = [
  {
    file: 'innova-crysta.jpg',
    urls: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
      'https://raw.githubusercontent.com/pub-assets/cars/main/innova-crysta.jpg'
    ]
  },
  {
    file: 'innova.jpg',
    urls: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'ertiga.jpg',
    urls: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'dzire.jpg',
    urls: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'etios.jpg',
    urls: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'urbania.jpg',
    urls: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'bus-22.jpg',
    urls: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    file: 'bus-28.jpg',
    urls: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

function downloadUrl(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close(() => resolve(destPath));
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  for (const item of sources) {
    const dest = path.join(targetDir, item.file);
    let success = false;
    for (const u of item.urls) {
      try {
        await downloadUrl(u, dest);
        const buf = fs.readFileSync(dest);
        const headerHex = buf.slice(0, 3).toString('hex');
        if (headerHex === 'ffd8ff' || headerHex.startsWith('89504e') || headerHex.startsWith('524946')) {
          console.log(`✓ ${item.file}: Valid Image (${buf.length} bytes, magic: ${headerHex})`);
          success = true;
          break;
        } else {
          console.error(`x ${item.file}: Not a valid image header (${headerHex})`);
        }
      } catch (err) {
        console.error(`Error downloading ${item.file} from ${u}:`, err.message);
      }
    }
  }
}

run();
