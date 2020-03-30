interface Props {
	name: string;
}

export const Identifier: AstNode<Props> = ({ name }) => {
	return name;
};

Identifier.nodeType = 'Identifier';
