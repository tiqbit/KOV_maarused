import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/data.ts');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /kov: "(.*?)",/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const kovName = match[1];
    const objectStart = content.lastIndexOf('{', match.index);
    const objectEnd = content.indexOf('}', match.index);
    const objectContent = content.substring(objectStart, objectEnd);
    if (!objectContent.includes('maakond:')) {
        console.log('Missing maakond for:', kovName);
    }
}
