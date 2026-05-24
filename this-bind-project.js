/**
 * USER MANAGER - Form Submission Project
 *
 * This code manages user data by:
 * 1. Listening for form submission
 * 2. Getting username and password from input fields
 * 3. Creating a user object with unique ID
 * 4. Storing all users in an array
 */

const form = document.querySelector("form");
const inputValue = document.getElementById("inputValue");
const passWd = document.getElementById("inputPswd");

const userManager = {
  users: [], // Array to store user objects
  nextId: 1, // Auto-incrementing ID for each user

  // Initialize: Attach event listener to form
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
    // .bind(this) ensures 'this' refers to userManager object, not the form
  },

  // Handle form submission
  submitForm: function (e) {
    e.preventDefault(); // Prevent page reload
    let username = inputValue.value; // Get username from input
    let password = passWd.value; // Get password from input
    this.addUser(username, password); // Pass to addUser method
    this.renderUserDetails();
  },

  // Add user to the array
  addUser: function (username, password) {
    // Create user object with unique ID
    const user = {
      Id: this.nextId++, // Assign ID (1, 2, 3, ...) and increment
      userName: username, // Store username
      passWd: password, // Store password
    };
    this.users.push(user); // Add user object to array
  },
  renderUserDetails: function () {
    console.log(this.users);
  },
  // Remove user (to be implemented)
  removeUser: function () {},
};

userManager.init(); // Start the application
