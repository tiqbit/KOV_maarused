import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/data.ts');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /kov: "(.*?)",\s+(?!maakond:)/g;
let match;
const missing = [];
while ((match = regex.exec(content)) !== null) {
    missing.push(match[1]);
}

console.log('Missing KOVs:', JSON.stringify(missing, null, 2));
