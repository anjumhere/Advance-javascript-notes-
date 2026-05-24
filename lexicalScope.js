/**
 * ============================================================================
 * 5. LEXICAL SCOPE (STATIC SCOPE)
 * ============================================================================
 *
 * DEFINITION:
 * Lexical scope means that the accessibility of variables is determined
 * by the POSITION of the variables in the SOURCE CODE.
 *
 * A function can access variables from:
 * 1. Its own scope
 * 2. Parent function's scope (enclosing scope)
 * 3. Global scope
 *
 * This scope chain is created at DEFINITION TIME, not execution time.
 */

const global = "I'm global";

function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    const innerVar = "I'm from inner";
    console.log(innerVar); // ✓ Can access own scope
    console.log(outerVar); // ✓ Can access parent scope
    console.log(global); // ✓ Can access global scope
  }
  inner();
}
outer();

console.log("=== 5. LEXICAL SCOPE ===");
console.log("Variables are accessible based on their position in source code.");
console.log("Scope chain: local → parent → global");
console.log("");
