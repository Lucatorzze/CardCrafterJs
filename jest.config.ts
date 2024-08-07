import { Config } from '@jest/types';

// Import ts-node/register to enable TypeScript support
require('ts-node').register();

const config: Config.InitialOptions = {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
};

export default config;