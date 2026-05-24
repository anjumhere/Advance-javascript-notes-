/**
 * ============================================================================
 * 4. THE 'THIS' KEYWORD - VALUE IN DIFFERENT CONTEXTS
 * ============================================================================
 *
 * DEFINITION:
 * The 'this' keyword refers to the object that is executing the current
 * function. The value of 'this' depends on HOW the function is called.
 *
 * IMPORTANT: The binding of 'this' is determined at CALL TIME, not definition time.
 */

// ============================================================================
// 4.1 'THIS' IN GLOBAL SCOPE
// ============================================================================

/**
 * In global scope, 'this' refers to the GLOBAL OBJECT.
 * - In browsers: window
 * - In Node.js: global
 */

// Example:
// console.log(this);  // Output: Window object (in browser)

console.log("=== 4.1 'THIS' IN GLOBAL SCOPE ===");
console.log("Global 'this' refers to: window (browser) or global (Node.js)");
console.log("");

// ============================================================================
// 4.2 'THIS' IN FUNCTION SCOPE
// ============================================================================

/**
 * In a regular function (ES5), 'this' defaults to the GLOBAL OBJECT.
 * Why? Because the function is implicitly called by the global object.
 * (window.fnc() in browser)
 */

// Example:
function fnc() {
  console.log(this); // Output: Window object
}
fnc(); // Implicitly called as window.fnc()

console.log("=== 4.2 'THIS' IN FUNCTION SCOPE ===");
console.log(
  "Regular function 'this' refers to: window (browser) or global (Node.js)",
);
console.log("");

// ============================================================================
// 4.3 'THIS' IN OBJECT METHOD
// ============================================================================

/**
 * When a function is called as a method of an object, 'this' refers to
 * the OBJECT that the method is called on.
 *
 * KEY RULE: 'this' = the object to the LEFT of the dot (.)
 */

const car = {
  brand: "Supra",
  getBrand: function () {
    console.log(this.brand); // 'this' = car object
  },
};
car.getBrand(); // Output: "Supra"

console.log("=== 4.3 'THIS' IN OBJECT METHOD ===");
console.log("Object method 'this' refers to: the object itself");
console.log("Rule: 'this' = object to the LEFT of the dot (.)");
console.log("");

// ============================================================================
// 4.4 'THIS' IN EVENT LISTENERS (ES5 FUNCTION)
// ============================================================================

/**
 * When a function is used as an event listener, 'this' refers to the
 * HTML ELEMENT that triggered the event.
 */

// Example:
// document.getElementById("h1").addEventListener("click", function () {
//   console.log(this);  // Output: <h1> element
//   this.style.color = "crimson";
// });

console.log("=== 4.4 'THIS' IN EVENT LISTENERS (ES5) ===");
console.log("Event listener 'this' refers to: the HTML element");
console.log("");

// ============================================================================
// 4.5 'THIS' IN ARROW FUNCTIONS
// ============================================================================

/**
 * CRITICAL DIFFERENCE: Arrow functions DO NOT have their own 'this'.
 * They inherit 'this' from the PARENT SCOPE (lexical binding).
 *
 * Arrow functions are useful when you need 'this' from the enclosing object.
 */

const cloths = {
  item: "Jeans",
  getItem: function () {
    // Regular function - 'this' = cloths object
    const sub = () => {
      // Arrow function - inherits 'this' from parent
      console.log(this.item); // Output: "Jeans"
    };
    sub();
  },
};
cloths.getItem();

console.log("=== 4.5 'THIS' IN ARROW FUNCTIONS ===");
console.log(
  "Arrow functions inherit 'this' from parent scope (lexical binding).",
);
console.log("Arrow functions DO NOT have their own 'this'.");
console.log("");

// ============================================================================
// 4.6 'THIS' IN CLASSES
// ============================================================================

/**
 * In a class constructor, 'this' refers to the newly created instance.
 * In class methods, 'this' also refers to the instance.
 */

class Animal {
  constructor(name) {
    this.name = name; // 'this' = the instance
  }
  getName() {
    console.log(this.name); // 'this' = the instance
  }
}
const dog = new Animal("Dog");
dog.getName(); // Output: "Dog"

console.log("=== 4.6 'THIS' IN CLASSES ===");
console.log("Class 'this' refers to: the instance of the class");
console.log("");

// ============================================================================
// 4.7 'THIS' SUMMARY TABLE
// ============================================================================

/**
 * +-------------------------------------------+---------------------+
 * | CONTEXT                                   | VALUE OF 'THIS'     |
 * +-------------------------------------------+---------------------+
 * | Global scope                              | window / global     |
 * | Regular function                          | window / global     |
 * | Object method (ES5)                       | object              |
 * | Arrow function                            | parent scope        |
 * | Event listener (ES5)                      | HTML element        |
 * | Event listener (Arrow)                    | window / global     |
 * | Class constructor / method                | instance            |
 * | Method with nested ES5 function           | window / global     |
 * | Method with nested arrow function         | object              |
 * +-------------------------------------------+---------------------+
 */

console.log("=== 4.7 'THIS' SUMMARY TABLE ===");
console.log("See comments above for complete reference table");
console.log("");
