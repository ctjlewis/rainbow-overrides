import { promises as fs } from 'fs';
import { getOverrides } from './compile.js';

export const write = async () => {
  const overrides = await getOverrides();
  await fs.writeFile(
    'rainbow-overrides.json',
    JSON.stringify(overrides, null, 2)
  );
};
