import fs from 'fs';
import path from 'path';

const artifactDir = 'C:\\Users\\suraj\\.gemini\\antigravity\\brain\\972c55e2-2646-4ea0-9403-82e102f439d6';
const targetDir = path.join(process.cwd(), 'public', 'images', 'vehicles');

const mappings = [
  { prefix: 'innova_crysta', target: 'innova-crysta.jpg' },
  { prefix: 'innova_classic', target: 'innova.jpg' },
  { prefix: 'ertiga_studio', target: 'ertiga.jpg' },
  { prefix: 'dzire_studio', target: 'dzire.jpg' },
  { prefix: 'etios_studio', target: 'etios.jpg' },
  { prefix: 'urbania_studio', target: 'urbania.jpg' },
  { prefix: 'bus_22_studio', target: 'bus-22.jpg' },
  { prefix: 'bus_28_studio', target: 'bus-28.jpg' }
];

const filesInArtifact = fs.readdirSync(artifactDir);

mappings.forEach(item => {
  const matchedFile = filesInArtifact.find(f => f.startsWith(item.prefix) && f.endsWith('.jpg'));
  if (matchedFile) {
    const srcPath = path.join(artifactDir, matchedFile);
    const destPath = path.join(targetDir, item.target);
    fs.copyFileSync(srcPath, destPath);
    const stat = fs.statSync(destPath);
    console.log(`✓ Copied ${item.prefix} -> ${item.target} (${stat.size} bytes)`);
  } else {
    console.error(`x File not found for prefix: ${item.prefix}`);
  }
});
