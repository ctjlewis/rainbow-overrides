import glob from 'glob';
import { promises as fs } from 'fs';
import { defaultOverrides } from './data/default-overrides.js';
export const getOverrides = async () => {
    const overrides = {};
    const overrideFiles = glob.sync('tokens/**/*.json');
    for (const overrideFile of overrideFiles) {
        const rawOverride = JSON.parse(await fs.readFile(overrideFile, 'utf-8'));
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
};
// export const overrides = await Promise.all(overridePromises);
