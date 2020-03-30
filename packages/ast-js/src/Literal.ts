interface Props {
	value?: boolean | number | string | null;
	regex?: {
		pattern: string;
		flags?: string;
	};
}

const nodeType = 'Literal';

export const Literal: AstNode<Props> = ({ value, regex }) => {
	if (typeof value === 'undefined') {
		if (!regex) {
			throw new Error(`[${nodeType}] must supply a value or a regex`);
		}
	}
	if (typeof value === 'undefined' && regex) {
		return `/${regex.pattern}/${regex.flags || ''}`;
	}
	return JSON.stringify(value);
};

Literal.nodeType = nodeType;
