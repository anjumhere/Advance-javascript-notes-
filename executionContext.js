/**
 * ============================================================================
 * 1. EXECUTION CONTEXT
 * ============================================================================
 *
 * DEFINITION:
 * An execution context is created whenever JavaScript encounters a function
 * or script. It's a process that runs in TWO PHASES:
 *
 * Phase 1: MEMORY PHASE (Hoisting)
 *   - Variables are initialized with 'undefined'
 *   - Function declarations are fully hoisted
 *
 * Phase 2: EXECUTION PHASE
 *   - Code is executed line by line
 *   - Variables are assigned actual values
 *   - Functions are invoked
 */

// EXAMPLE: Memory Phase + Execution Phase
function know() {
  let a = 10;
  return {
    increment: function () {
      a++;
    },
    print: function () {
      console.log(a);
    },
  };
}

let fnc = know();
fnc.increment(); // a becomes 11
fnc.print(); // Output: 11
fnc.increment(); // a becomes 12
fnc.print(); // Output: 12

console.log("=== 1. EXECUTION CONTEXT ===");
console.log("Execution Context has 2 phases: Memory Phase and Execution Phase");
console.log("");
