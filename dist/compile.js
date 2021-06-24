import glob from 'glob';
import { promises as fs } from 'fs';
const overrideFiles = glob.sync('tokens/**/*.json');
const overridePromises = overrideFiles.map(async (overrideFile) => {
    return JSON.parse(await fs.readFile(overrideFile, 'utf-8'));
});
export const overrides = await Promise.all(overridePromises);
