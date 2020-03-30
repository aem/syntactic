# @syntactic/ast-js

> Syntactic's core components that represent the JavaScript AST.

The core of syntactic is AST nodes.
By defining the core building blocks of JavaScript as components, we can then compose those components to build incredibly powerful abstractions for file generation.
The node types attempt to follow [Esprima's](https://esprima.readthedocs.io/en/latest/syntax-tree-format.html) AST format as closely as possible.
This should allow for developers to write a sample template into [ASTExplorer](https://astexplorer.net) and then mostly directly copy the output of the AST into Syntactic components, with very little overhead given the overlap in syntax.
