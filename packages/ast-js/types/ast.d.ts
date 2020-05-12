declare interface Children {
	children?: JSXChildren;
}

declare type PropsWithChildren<P> = P & Children;

declare type NodeType<P = {}> = JSX.Element<P> | string | null;

declare type AstNode<Props> =
	| (((props: PropsWithChildren<Props>) => NodeType<Props>) & {
			nodeType: string;
	  })
	| string;

declare namespace JSX {
	interface Element<Props> {
		key?: string;
		type: AstNode<Props>;
		props: Props;
	}

	interface ElementChildrenAttribute {
		children: {};
	}
}

declare type JSXChildren = JSX.Element<any> | JSX.Element<any>[] | string;
