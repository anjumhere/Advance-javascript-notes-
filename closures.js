/**
 * ============================================================================
 * 2. CLOSURES
 * ============================================================================
 *
 * DEFINITION:
 * A closure is a function that has access to variables from its own scope,
 * parent function's scope, and global scope. It "remembers" the variables
 * from the scope in which it was created, even after the parent function
 * has finished executing.
 *
 * KEY POINT: Inner functions can access outer function variables.
 */

// EXAMPLE: Basic Closure
function outerFunction() {
  let count = 0; // This variable is "remembered" by the inner function

  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

console.log("=== 2. CLOSURES ===");
console.log(
  "A closure allows inner functions to access outer function variables.",
);
console.log("");
