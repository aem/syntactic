import { StatementExpression } from './ExportDeclaration';

interface Props {
	name?: string;
	args?: string | string[];
}

export const FunctionDeclaration: AstNode<Props> = ({
	children = '',
	name = '',
	args = '',
}) => {
	return `function ${name}(${
		args ? (typeof args === 'string' ? args : args.join(', ')) : ''
	}) {
  ${children}
}`;
};

FunctionDeclaration.nodeType = 'FunctionDeclaration';
