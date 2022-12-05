import crypto from 'crypto'
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const filepath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const file = await fs.readFile(filepath, 'utf8');

    const hash = crypto.createHash('sha256').update(file).digest('hex');
    console.log(hash);
};

await calculateHash();