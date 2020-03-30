export function createAstNode<Props>(
	node: AstNode<Props>,
	props: Props,
	...children: AstNode<Props>[]
) {
	const propsToPass = {
		children,
		...props,
	};
	return typeof node === 'string'
		? node
		: typeof node === 'function'
		? node(propsToPass)
		: '';
}
