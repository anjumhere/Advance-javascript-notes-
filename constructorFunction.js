// Constructor Function
// function Shoes(name, price, color, size, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.size = size;
//   this.company = company;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.appendChild(h1);
//   };
// }

// // used when you have to make something permanent in your object
// Shoes.prototype.quality = "Average";

// let shoesz = new Shoes("Sneakerss", 1000, "red", "XL", "Nike");
// console.log(shoesz.write("Amazing shoes"));
// console.log(shoesz);

// var pen = "HB";

function Pencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

Pencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  document.body.appendChild(h1);
};

let pencil1 = new Pencil("HBPencil", 50, "Purple", "A-pens");
pencil1.write("hello g");
console.log(pencil1);
