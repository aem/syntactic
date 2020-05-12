import { createAstNode } from '../src/createAstNode';

describe('createAstNode', () => {
	it('properly handles AST nodes', () => {
		expect(createAstNode('test', {})).toBe('test');
		const tempNode: AstNode<{ arg: string }> = ({ arg }) => arg;
		tempNode.nodeType = 'tmp';
		expect(createAstNode(tempNode, { arg: '123' })).toBe('123');
	});
});
