export interface Props {
	isDefault?: boolean;
}

export interface StatementExpression {}

export const ExportDeclaration: AstNode<Props> = ({
	children,
	isDefault = false,
}) => {
	return `export${isDefault ? ' default' : ''} ${children}`;
};

ExportDeclaration.nodeType = 'ExportDeclaration';
