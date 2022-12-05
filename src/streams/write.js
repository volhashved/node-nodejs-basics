import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filepath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writable = fs.createWriteStream(filepath);

    process.stdin.on('data', chunk => {
        writable.write(chunk.toString())
    });

    process.stdin.emit('data', 'abc');
};

await write();