import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)

    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        await fs.cp(srcDir, destDir, {
            recursive: true,
            errorOnExist: true,
            force: false
        })
      } catch (err) {
        if(err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed')
        }
      }

};

await copy();
