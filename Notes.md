# Notes


### Let and Var
The difference is scope. `var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

Also, variables declared with let are not accessible before they are declared in their enclosing block. As seen in the demo, this will throw a ReferenceError exception.
