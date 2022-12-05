import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filepath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filepath)
        const file = await fs.readFile(filepath, 'utf8');
        console.log(file)
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }

};

await read();