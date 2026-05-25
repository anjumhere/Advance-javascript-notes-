class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "you are a user";
  }
  checkRole() {
    return `${this.role}`;
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.username} ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "you are an admin";
  }
  remove() {
    document.querySelectorAll("h1").forEach(function (elem) {
      elem.remove();
    });
  }
}

let user1 = new User("Anjum", "Gilgit", "anjumcode", "anjum@gmail.com");
console.log(user1.write("here"));
let admin = new Admin("kamran", "gupis", "adminhere", "admin@gmail.com");
// console.log(admin.write("i am admin"));
// console.log(user1.write("i am user"));
// console.log(admin.remove());
console.log(user1.checkRole());
console.log(admin.checkRole());

// prototypal inheritance : other programming languages like cpp java , they had inheritance i-e class to class inheritance , in js it didin't exsisted at that time , so they had prototypal inheritance where you can inherit an object from an object.

let a = {
  name: "jon",
  age: 30,
  address: "arizona",
};

let b = Object.create(a);
console.log(b);
