import { promises as fs } from 'fs';
import { overrides } from './compile.js';
await fs.writeFile('dist/rainbow-token-overrides.json', JSON.stringify(overrides));
