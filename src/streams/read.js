import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filepath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readable = fs.createReadStream(filepath);
    readable.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
};

await read();