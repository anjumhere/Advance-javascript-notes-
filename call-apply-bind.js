/*
1. call() METHOD
Definition:
call() is a built-in JavaScript method that allows you to invoke a function with a specific this value and pass arguments individually. It executes the function immediately.
*/

// example - syntax

// function.call(thisArg, arg1, arg2, arg3, ...)

/*
let obj = {
  name: "Alice",
  age: 34,
};

function callObj(a, b, c) {
  console.log(this.age, a, b, c);
}

callObj.call(obj, 1, 2, 3);


Key Points:

✓ Invokes function immediately
✓ Sets this explicitly
✓ Arguments passed as individual parameters
✓ Returns the function's result directly

*/

/*
Apply Method: Definition:
apply() is similar to call(), but it accepts arguments as an array instead of individual parameters. It also executes the function immediately with a specified this value.
*/

// EXAMPLE-SYNTAX

// function.apply(thisArg, [arg1, arg2, arg3, ...])

/*
let obj = {
  name: "Alice",
  age: 34,
};

function callObj(a, b, c) {
  console.log(this.age, a, b, c);
}

callObj.apply(obj, [1, 2, 3]);

*/

/*
Key Points:

✓ Invokes function immediately
✓ Sets this explicitly
✓ Arguments passed as an array
✓ Returns the function's result directly

*/

/*

3. bind() METHOD
Definition:
bind() creates a new function with a permanently bound this value. Unlike call() and apply(), it does NOT execute the function immediately. It returns a new function that can be called later.

*/
/*
let obj = {
  name: "Alice",
  age: 34,
};

function callObj(a, b, c) {
  console.log(this.age, a, b, c);
}
*/

//callObj.bind(obj, 1, 2, 3);  it gives us another function which you have to save somewhere

// let fnc = callObj.bind(obj, 1, 2, 3); // now you have to call fnc to see the result
// fnc();

/*
Key Points:

✓ Does NOT invoke function immediately
✓ Returns a new function with permanent this binding
✓ Arguments can be pre-filled (partial application)
✓ Useful for callbacks and event handlers
*/

/*

 ============================================================================
 WHEN TO USE EACH: call(), apply(), bind()
 ============================================================================

 
 USE CASE                                           | METHOD            | WHY                               
   
 * | Call function immediately with specific 'this' | call()            | Direct execution, clear & concise |
 * | Call function immediately with array arguments | apply()           | Built for handling array arguments |
 * | Create reusable function with bound 'this'     | bind()            | Returns new function for later use |
 * | Event listeners / Callbacks                    | bind()            | Must pre-bind before passing       |
 * | Function borrowing between objects             | call() / apply()  | Immediate execution needed       
  
 
 */
