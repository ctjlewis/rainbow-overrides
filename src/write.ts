import { promises as fs } from 'fs'
import { overrides } from './compile.js'

export const write = async () => {
  await fs.writeFile(
    'rainbow-token-overrides.json',
    JSON.stringify(overrides)
  );
}