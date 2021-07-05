import { promises as fs } from 'fs';
import { getOverrides } from './compile.js';

export const write = async () => {
  const overrides = await getOverrides();
  const serialized = JSON.stringify(overrides, null, 2);
  /**
   * Copy to src/output for exporting.
   */
  await fs.writeFile(
    'src/data/rainbow-overrides.json',
    serialized
  );
};
