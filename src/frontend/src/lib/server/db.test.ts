import { describe, it, expect, vi, beforeEach } from 'vitest';

let drizzleImpl: any;
let drizzleMockFn: any;
let createPoolFn: any;

vi.mock('drizzle-orm/mysql2', () => {
	drizzleImpl = vi.fn((pool: unknown) => ({ __realDb: true, pool }));
	drizzleMockFn = vi.fn(() => ({ __mockDb: true }));

	// Important: keep `drizzle` as a normal function so we can attach a real `.mock()` method
	// (Vitest's `vi.fn` already has a `.mock` getter used for call metadata).
	const drizzle: any = (pool: unknown) => drizzleImpl(pool);
	drizzle.mock = drizzleMockFn;

	return { drizzle };
});

vi.mock('mysql2/promise', () => {
	createPoolFn = vi.fn(() => ({ __pool: true }));
	return { default: { createPool: createPoolFn } };
});

describe('db module BUILD_MODE branching', () => {
	beforeEach(() => {
		vi.resetModules();
		delete process.env.BUILD_MODE;

		if (typeof drizzleImpl?.mockClear === 'function') drizzleImpl.mockClear();
		if (typeof drizzleMockFn?.mockClear === 'function') drizzleMockFn.mockClear();
		if (typeof createPoolFn?.mockClear === 'function') createPoolFn.mockClear();
	});

	it('uses drizzle.mock() and does not create a MySQL pool in BUILD_MODE=true', async () => {
		process.env.BUILD_MODE = 'true';

		const mod = await import('./db');
		expect(mod.db).toEqual({ __mockDb: true });
		expect(drizzleMockFn).toHaveBeenCalledTimes(1);
		expect(createPoolFn).not.toHaveBeenCalled();
	});

	it('creates a MySQL pool and uses drizzle(pool) in BUILD_MODE=false', async () => {
		process.env.BUILD_MODE = 'false';
		process.env.MYSQL_HOST = 'localhost';
		process.env.MYSQL_PORT = '3307';
		process.env.MYSQL_USER = 'user';
		process.env.MYSQL_PASSWORD = 'pass';
		process.env.MYSQL_DATABASE = 'db';

		const mod = await import('./db');
		expect(mod.db).toEqual({ __realDb: true, pool: { __pool: true } });

		expect(createPoolFn).toHaveBeenCalledTimes(1);
		const poolArgs = createPoolFn.mock.calls[0][0] as Record<string, unknown>;
		expect(poolArgs.host).toBe('localhost');
		expect(poolArgs.port).toBe(3307);
		expect(poolArgs.user).toBe('user');
		expect(poolArgs.password).toBe('pass');
		expect(poolArgs.database).toBe('db');

		expect(drizzleImpl).toHaveBeenCalledTimes(1);
	});

	it('uses default MySQL port 3306 when MYSQL_PORT is not set', async () => {
		process.env.BUILD_MODE = 'false';

		process.env.MYSQL_HOST = 'localhost';
		// Intentionally unset MYSQL_PORT to cover the default branch.
		delete process.env.MYSQL_PORT;
		process.env.MYSQL_USER = 'user';
		process.env.MYSQL_PASSWORD = 'pass';
		process.env.MYSQL_DATABASE = 'db';

		const mod = await import('./db');
		expect(mod.db).toEqual({ __realDb: true, pool: { __pool: true } });

		expect(createPoolFn).toHaveBeenCalledTimes(1);
		const poolArgs = createPoolFn.mock.calls[0][0] as Record<string, unknown>;
		expect(poolArgs.port).toBe(3306);
	});
});

