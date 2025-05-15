import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		// command: 'pnpm run build && pnpm run preview',
		// running the tests in dev to avoid db connection issues
		command: 'pnpm run dev',
		port: 5173,
		reuseExistingServer:true
	},
	testDir: './tests'
};

export default config;
