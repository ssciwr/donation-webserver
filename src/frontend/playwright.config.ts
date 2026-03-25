import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// Tier 1: run the real production build, but skip DB calls via BUILD_MODE=true
		command: 'BUILD_MODE=true PORT=3000 pnpm run build && BUILD_MODE=true PORT=3000 node dist',
		port: 3000,
		reuseExistingServer: false
	},
	testDir: './tests',
	use: {
		baseURL: 'http://localhost:3000'
	}
};

export default config;
