import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filepath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filepath)
        await fs.unlink(filepath)
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await remove();