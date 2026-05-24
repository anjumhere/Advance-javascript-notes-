/**
 * ============================================================================
 * 3. ENCAPSULATION
 * ============================================================================
 *
 * DEFINITION:
 * Encapsulation is the practice of bundling data (variables) and methods
 * (functions) together while hiding the inner implementation details.
 * Only expose what's necessary; hide the rest.
 *
 * BENEFIT: Data privacy - variables cannot be accessed directly from outside
 */

// EXAMPLE 1: Bank System with Encapsulation
function bankSystem() {
  let balance = 1000; // PRIVATE: Cannot be accessed directly

  return {
    deposite: function (amount) {
      if (amount > 0) balance += amount;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Not enough balance");
      } else {
        balance -= amount;
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

let account = bankSystem();
account.deposite(2000); // balance: 3000
account.withdraw(11); // balance: 2989
console.log(account.getBalance()); // Output: 2989
// account.balance;        // undefined - balance is PRIVATE

// EXAMPLE 2: Click Limiter with Encapsulation
function clickLimiter() {
  let click = 0; // PRIVATE: Hidden from outside

  return function checker() {
    if (click < 5) {
      click++;
      console.log(`Clicked ${click} times.`);
    } else {
      console.error(`Limit exceeded, try after some time.`);
    }
  };
}

let fnc = clickLimiter();
fnc(); // Clicked 1 times.
fnc(); // Clicked 2 times.
fnc(); // Clicked 3 times.
fnc(); // Clicked 4 times.
fnc(); // Clicked 5 times.
fnc(); // Limit exceeded, try after some time.

console.log("=== 3. ENCAPSULATION ===");
console.log(
  "Hide internal implementation; expose only necessary methods/data.",
);
console.log("Uses closures to create private variables.");
console.log("");
