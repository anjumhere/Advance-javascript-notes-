/**
 * ============================================================================
 * 6. DYNAMIC SCOPE
 * ============================================================================
 *
 * DEFINITION:
 * Dynamic scope determines variable accessibility based on the CALL STACK
 * (how the function was called), not the source code position.
 *
 * NOTE: JavaScript uses LEXICAL scope, not dynamic scope.
 * However, the 'this' keyword can exhibit dynamic behavior.
 */

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

const anotherPerson = { name: "Bob" };
person.greet.call(anotherPerson); // Output: "Hello, Bob"
// 'this' is determined by HOW the function is called (call stack)

console.log("=== 6. DYNAMIC SCOPE ===");
console.log("Accessibility based on CALL STACK (how function was called).");
console.log("JavaScript uses LEXICAL scope, but 'this' is dynamic.");
console.log("");
