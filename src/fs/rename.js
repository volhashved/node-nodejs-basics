import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(newPath)
        throw new Error('FS operation failed')
    } catch (err) {
        if(err.code === 'ENOENT') {
            try {
                await fs.rename(oldPath, newPath)
            } catch (error) {
                throw new Error('FS operation failed')
            }
        }
        else {
            throw err
        }
    }
};

await rename();