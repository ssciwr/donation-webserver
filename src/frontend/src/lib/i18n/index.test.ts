import { describe, it, expect, vi } from 'vitest';
import { _ } from './index';

describe('i18n translation helper', () => {
	it('returns the German value for a known nested key', () => {
		expect(_('homepage.emailCommunication.title', 'de')).toBe(
			'Kommunikation mittels Email'
		);
	});

	it('returns the French value for a known nested key', () => {
		expect(_('homepage.emailCommunication.title', 'fr')).toBe(
			'Communication par mail'
		);
	});

	it('returns a deterministic missing marker when the key does not exist', () => {
		// `_()` logs a warning when falling back fails; keep test output clean.
		const warnSpy = vi.spyOn(console, 'warn');
		warnSpy.mockImplementation(() => {});
		expect(_('homepage.does.not.exist.title', 'de')).toBe(
			'[Missing translation: homepage.does.not.exist.title]'
		);
		warnSpy.mockRestore();
	});
});

