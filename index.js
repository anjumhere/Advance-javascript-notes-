// execution context
// js sabse pehly he app ka function dekhta hai subse pehly , js banata hai  exection context , ye aik process hai jo k 2 different phases mai chalta hai , ek ka naam hai memory phase , aik ka naam hai memory phase , dusry ka nam exection phase.

// function know() {
//   let a = 10;
//   return {
//     increment: function () {
//       a++;
//     },
//     print: function () {
//       console.log(a);
//     },
//   };
// }

// let fnc = know();
// fnc.increment();
// fnc.print();
// fnc.increment();
// fnc.print();

//Encapsulation = showing only necessary data and hiding the inner logic

// function bankSystem() {
//   let balance = 1000;
//   return {
//     deposite: function (amount) {
//       if (amount > 0) balance += amount;
//     },
//     withdraw: function (amount) {
//       if (amount > balance) {
//         console.log("Not enough balance");
//       } else {
//         balance -= amount;
//       }
//     },
//     getBalance: function () {
//       console.log(balance);
//       return balance;
//     },
//   };
// }
// let fnc = bankSystem();
// fnc.deposite(2000);
// fnc.withdraw(11);
// fnc.getBalance();

// function clickLimiter() {
//   click = 0;
//   return function checker() {
//     if (click < 5) {
//       click++;
//       console.log(`Clicked ${click} times.`);
//     } else {
//       console.error(`Limit exceeded, try after some time.`);
//     }
//   };
// }

// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

// 'this' keyword

// global
// console.log(this);
// value of this in global is window

// function scope
// function fnc() {
//   console.log(this);
// }
// fnc();

// in function scope the value of this is windows , because function is called by window window.fnc()

// object-method = function in an obj is called method
// const car = {
//   brand: "Supra",
//   getBrand: function () {
//     console.log(this.brand);
//   },
// };

// car.getBrand();
// in object-method , the value of this keyword is object becaue this was called by car-the object.Now we can access all the values of the object using this keyword.

// Event-Handler
// document.getElementById("h1").addEventListener("click", function () {
//   console.log((this.style.color = "crimson"));
// });

// arrow function
const cloths = {
  item: "Jeans",
  getItem: function () {
    sub = () => {
      console.log(this.item);
    };
    sub();
  },
};

cloths.getItem();
