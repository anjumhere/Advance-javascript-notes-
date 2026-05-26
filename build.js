const userName = async () => {
  try {
    let response = await fetch("https://randomuser.me/api/?results=5");
    const { results } = await response.json();
    // const { title, first, last } = results[0].name;
    // console.log(`${title} ${first} ${last}`);
    cards(results);
  } catch (error) {
    console.log(error);
  }
};

userName();

const cards = (data) => {
  let container = document.createElement("div");
  data.map((user) => {
    console.log(user);
    container.classList.add("container");
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
    document.body.appendChild(container);
  });
};
