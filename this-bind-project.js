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
const inputUsername = document.getElementById("inputUsername");
const inputAge = document.getElementById("inputAge");
const inputProfession = document.getElementById("inputProfession");
const inputPhotoUrl = document.getElementById("inputPhotoUrl");

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
    let username = inputUsername; // Get username from input
    let age = inputAge;
    let profession = inputProfession;
    let photoUrl = inputPhotoUrl;
    this.addUser(username, age, profession, photoUrl); // Pass to addUser method
  },

  // Add user to the array
  addUser: function (username, age, profession, photoUrl) {
    // Create user object with unique ID
    const user = {
      Id: this.nextId++, // Assign ID (1, 2, 3, ...) and increment
      userName: username.value, // Store username
      age: age.value,
      profession: profession.value,
      photo: photoUrl.value,
    };
    this.users.push(user);
    this.renderUI(user);
    console.log(this.users);
  },
  renderUI: function (user) {
    const userCard = document.createElement("div");
    userCard.className = "user-card";

    // Create the image element
    const img = document.createElement("img");
    img.src = user.photo;
    img.alt = "User Avatar";

    // Create the username heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = user.userName;

    // Create the profession paragraph
    const professionPara = document.createElement("p");
    professionPara.textContent = user.profession;

    // Create the age badge
    const ageBadge = document.createElement("div");
    ageBadge.className = "age";
    ageBadge.textContent = `Age: ${user.age}`;

    // Append all elements to the card
    userCard.appendChild(img);
    userCard.appendChild(nameHeading);
    userCard.appendChild(professionPara);
    userCard.appendChild(ageBadge);

    cardContainer.appendChild(userCard);
  },
  // Remove user (to be implemented)
  removeUser: function () {},
};

userManager.init(); // Start the application
