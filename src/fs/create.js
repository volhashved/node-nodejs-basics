import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filepath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filepath)
        throw new Error('FS operation failed')
    } catch (err) {
        if (err.code === 'ENOENT') {
            fs.writeFile(filepath, content);
        } else {
            throw err
        }
    }
};

await create();