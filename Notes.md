# Notes


### Let and Var
The difference is scope. `var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

Also, variables declared with let are not accessible before they are declared in their enclosing block. As seen in the demo, this will throw a ReferenceError exception.

### Classes
Classes zoals in React.

### What is scope?

One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values. But the inclusion of variables into our program begets the most interesting questions we will now address: where do those variables live? In other words, where are they stored? And, most importantly, how does our program find them when it needs them?

### Callbacks

Even though at an operational level our brains are async evented, we seem to plan out tasks in a sequential, synchronous way. "I need to go to the store, then buy some milk, then drop off my dry cleaning." So does the developer think: "I need to set z to the value of x, and then x to the value of y," and so forth.

Callbacks are the fundamental unit of asynchrony in JS. But they're not enough for the evolving landscape of async programming as JS matures.

First, our brains plan things out in sequential, blocking, single-threaded semantic ways, but callbacks express asynchronous flow in a rather nonlinear, nonsequential way, which makes reasoning properly about such code much harder. Bad to reason about code is bad code that leads to bad bugs. We need a way to express asynchrony in a more synchronous, sequential, blocking manner, just like our brains do.

Second, and more importantly, callbacks suffer from inversion of control in that they implicitly give control over to another party (often a third-party utility not in your control!) to invoke the continuation of your program. This control transfer leads us to a troubling list of trust issues, such as whether the callback is called more times than we expect.

If you have code that uses callbacks, especially but not exclusively with third-party utilities, and you're not already applying some sort of mitigation logic for all these inversion of control trust issues, your code has bugs in it right now even though they may not have bitten you yet. Latent bugs are still bugs.

### Strict mode
Normally, when you forget to put let in front of your binding, as with counter in the example, JavaScript quietly creates a global binding and uses that. In strict mode, an error is reported instead. 
Another change in strict mode is that the this binding holds the value undefined in functions that are not called as methods. When making such a call outside of strict mode, this refers to the global scope object, which is an object whose properties are the global bindings. 

### Exceptions
Exceptions are a mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception. An exception can be any value. Raising one somewhat resembles a super-charged return from a function: it jumps out of not just the current function but also its callers, all the way down to the first call that started the current execution. This is called unwinding the stack. 


