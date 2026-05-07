import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../src/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const mapping: Record<string, string[]> = {
    'Harju maakond': [
        'Anija vald', 'Harku vald', 'Jõelähtme vald', 'Keila linn', 'Kiili vald', 
        'Kose vald', 'Kuusalu vald', 'Loksa linn', 'Maardu linn', 'Raasiku vald', 
        'Rae vald', 'Saku vald', 'Saue vald', 'Tallinna linn', 'Viimsi vald', 
        'Lääne-Harju vald'
    ],
    'Hiiu maakond': ['Hiiumaa vald'],
    'Ida-Viru maakond': [
        'Alutaguse vald', 'Jõhvi vald', 'Kohtla-Järve linn', 'Lüganuse vald', 
        'Narva linn', 'Narva-Jõesuu linn', 'Sillamäe linn', 'Toila vald'
    ],
    'Jõgeva maakond': ['Jõgeva vald', 'Mustvee vald', 'Põltsamaa vald'],
    'Järva maakond': ['Järva vald', 'Paide linn', 'Türi vald'],
    'Lääne maakond': ['Haapsalu linn', 'Lääne-Nigula vald', 'Vormsi vald'],
    'Lääne-Viru maakond': [
        'Haljala vald', 'Kadrina vald', 'Rakvere linn', 'Rakvere vald', 
        'Tapa vald', 'Vinni vald', 'Viru-Nigula vald', 'Väike-Maarja vald'
    ],
    'Põlva maakond': ['Kanepi vald', 'Põlva vald', 'Räpina vald'],
    'Pärnu maakond': [
        'Häädemeeste vald', 'Kihnu vald', 'Lääneranna vald', 
        'Põhja-Pärnumaa vald', 'Pärnu linn', 'Saarde vald', 'Tori vald'
    ],
    'Rapla maakond': ['Kehtna vald', 'Kohila vald', 'Märjamaa vald', 'Rapla vald'],
    'Saare maakond': ['Muhu vald', 'Ruhnu vald', 'Saaremaa vald'],
    'Tartu maakond': [
        'Elva vald', 'Kambja vald', 'Kastre vald', 'Luunja vald', 
        'Nõo vald', 'Peipsiääre vald', 'Tartu linn', 'Tartu vald'
    ],
    'Valga maakond': ['Otepää vald', 'Tõrva vald', 'Valga vald'],
    'Viljandi maakond': ['Mulgi vald', 'Põhja-Sakala vald', 'Viljandi linn', 'Viljandi vald'],
    'Võru maakond': ['Antsla vald', 'Rõuge vald', 'Setomaa vald', 'Võru linn', 'Võru vald']
};

const kovToMaakond: Record<string, string> = {};
for (const [maakond, kovs] of Object.entries(mapping)) {
    for (const kov of kovs) {
        kovToMaakond[kov] = maakond;
    }
}

// Robustly remove existing maakond fields
content = content.replace(/\s*maakond: ".*?",/g, '');

// Add maakond back
content = content.replace(/kov: "(.*?)",/g, (match, kovName) => {
    const maakond = kovToMaakond[kovName];
    if (maakond) {
        return `kov: "${kovName}",\n    maakond: "${maakond}",`;
    }
    console.log(`Warning: Could not find maakond for "${kovName}"`);
    return match;
});

fs.writeFileSync(filePath, content);
console.log('Successfully updated maakond in regulations.');
