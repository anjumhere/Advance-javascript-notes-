const container = document.querySelector(".container");
const button = document.querySelector(".btn");

const userName = async () => {
  container.innerHTML = "";
  try {
    let response = await fetch("https://randomuser.me/api/?results=4");
    const { results } = await response.json();

    cards(results);
  } catch (error) {
    console.log(error);
  }
};
userName();

button.addEventListener("click", userName);
const cards = (data) => {
  data.map((user) => {
    let userCard = document.createElement("div");
    userCard.classList.add("user-card");

    let image = document.createElement("img");
    image.src = user.picture.medium;

    let user_name = document.createElement("h3");
    user_name.textContent = `${user.name.first} ${user.name.last}`;

    let located = document.createElement("p");
    located.textContent = user.location.city;

    let age_details = document.createElement("div");
    age_details.textContent = `${user.dob.age} Yrs`;
    age_details.classList.add("age");

    userCard.appendChild(image);
    userCard.appendChild(user_name);
    userCard.appendChild(located);
    userCard.appendChild(age_details);
    container.appendChild(userCard);
  });
};
