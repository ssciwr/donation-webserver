import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// Tier 1: run the real production build, but skip DB calls via BUILD_MODE=true
		command: 'pnpm run build && node dist',
		url: 'http://localhost:3000',
		reuseExistingServer: false,
		env: {
			BUILD_MODE: 'true',
			PORT: '3000'
		}
	},
	testDir: './tests',
	use: {
		baseURL: 'http://localhost:3000'
	}
};

export default config;
