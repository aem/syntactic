import * as syntactic from '@syntactic/core';
import { Identifier } from '../src/Identifier';

describe('Identifier', () => {
	it('outputs the proper identifier', () => {
		expect(<Identifier name="test" />).toBe('test');
	});
});
