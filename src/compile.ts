import glob from 'glob'
import { promises as fs } from 'fs'
import defaultOverrides from './data/default-overrides.json';

export type OverrideToken = {
  color?: string;
  isCurated?: boolean;
  isVerified?: boolean;
  name?: string;
  symbol?: string;
  shadowColor?: string;
};

export const getOverrides = async () => {
  const overrides: { [address: string]: OverrideToken } = {};
  const overrideFiles = glob.sync('tokens/**/*.json');

  for (const overrideFile of overrideFiles) {
    const rawOverride = JSON.parse(
      await fs.readFile(overrideFile, 'utf-8')
    );
    /**
     * Each override is indexed by its address, i.e.: 
     *
     * { '0x123...': { color: ... }, ... }
     */
    const { address, ...overrideData } = rawOverride;
    overrides[address] = overrideData;
  }

  return {
    ...defaultOverrides,
    ...overrides,
  };
}

export { defaultOverrides };