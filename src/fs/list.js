import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const dirpath = path.join(__dirname, 'files');

    try {
        const files = await fs.readdir(dirpath)
        console.log(files)
    } catch (err) {
        if(err.code === 'ENOENT') {
            throw new Error ('FS operation failed')
        }
    }
};

await list();