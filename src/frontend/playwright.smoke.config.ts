import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests/smoke',
    timeout: 60_000,
    retries: process.env.CI ? 2 : 0,
    reporter: [['list']],
    use: {
        baseURL: process.env.SMOKE_BASE_URL
    }
};

export default config;
