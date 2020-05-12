import * as syntactic from '@syntactic/core';
import { Literal } from '../src/Literal';

describe('Literal', () => {
	it('prints primitives properly', () => {
		expect(<Literal value={true} />).toBe('true');
		expect(<Literal value="test string" />).toBe('"test string"');
		expect(<Literal value={1234} />).toBe('1234');
		expect(<Literal value={null} />).toBe('null');
	});

	it('prints RegExps properly', () => {
		expect(<Literal regex={{ pattern: 'https?://' }} />).toBe('/https?:///');
		expect(<Literal regex={{ pattern: 'https?://', flags: 'gi' }} />).toBe(
			'/https?:///gi'
		);
	});

	it("throws when RegEx prop isn't populated properly", () => {
		// @ts-ignore This will fail in TS files, but we should still verify for the JS context
		expect(() => <Literal regex={{}} />).toThrow();
		expect(() => <Literal />).toThrow();
	});
});
