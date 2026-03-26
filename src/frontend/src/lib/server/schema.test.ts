import { describe, it, expect } from 'vitest';
import { donationsTable, newsletterTable } from './schema';

describe('database schema exports', () => {
	it('exports donationsTable with expected columns', () => {
		// We don't assert Drizzle internals deeply; we just ensure the module executes
		// and the expected column keys exist.
		expect(Object.keys(donationsTable).length).toBeGreaterThan(0);
		expect((donationsTable as any).donations).toBeUndefined();
		expect((donationsTable as any).gender).toBeDefined();
		expect((donationsTable as any).email).toBeDefined();
	});

	it('exports newsletterTable with expected columns', () => {
		expect(Object.keys(newsletterTable).length).toBeGreaterThan(0);
		expect((newsletterTable as any).email).toBeDefined();
	});
});

