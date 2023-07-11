import { describe, expect, it } from 'vitest';
import { sample } from './sample';

describe('Sample', () => {
	it('Should return Sample', () => {
		expect(sample()).toBe('Sample');
	});
});
