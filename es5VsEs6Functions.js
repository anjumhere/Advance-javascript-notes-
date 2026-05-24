/**
 * ============================================================================
 * 8. ES5 vs ES6 FUNCTIONS - KEY DIFFERENCES
 * ============================================================================
 *
 * +---------------------------+----------------------+----------------------+
 * | FEATURE                   | ES5 (function)       | ES6 (arrow =>)       |
 * +---------------------------+----------------------+----------------------+
 * | Own 'this'                | YES                  | NO                   |
 * | 'this' binding            | Dynamic (call-time)  | Lexical (definition) |
 * | Hoisting                  | Full hoisting        | Temporal Dead Zone   |
 * | new keyword               | Can use              | Cannot use           |
 * | arguments object          | Available            | Not available        |
 * | Prototype                 | Has prototype        | No prototype         |
 * +---------------------------+----------------------+----------------------+
 */

console.log("=== 8. ES5 vs ES6 FUNCTIONS ===");
console.log("ES5 functions: Have own 'this', dynamic binding");
console.log("ES6 arrow functions: No own 'this', lexical binding");
console.log("");
