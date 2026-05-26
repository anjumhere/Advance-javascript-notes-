// Callback hell

/*
function getProfile(username, fn) {
  console.log("Fetching userData....");
  setTimeout(() => {
    fn({ _id: 12323423, username });
  }, 2000);
}

function getPosts(id, cb) {
  console.log("Fetching user posts....");
  setTimeout(() => {
    cb({ _id: id, posts: ["instagram posts 1"] });
  }, 2000);
}
function savedPosts(id, cb) {
  console.log("Fetching all saved posts....");
  setTimeout(() => {
    cb({ _id: id, savedposts: ["gigit", "k2", "ghizer", "phander"] });
  }, 3000);
}

getProfile("anjum", function (userData) {
  console.log(userData);
  getPosts(userData._id, function (posts) {
    console.log(posts);
    savedPosts(userData._id, function (savedposts) {
      console.log(savedposts);
    });
    });
    });
    */

let pr = new Promise((res, rej) => {
  let rn = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (rn < 5) res(rn);
    else rej(rn);
  }, 1000);
});

pr.then((val) => {
  console.log(`Data received: ${val}`);
}).catch((val) => {
  console.error(`CONNECTION FAILED!!! ERROR CODE : ${val}`);
});

let asynAwait = async () => {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
};
asynAwait();

// Real example of handling api with promsie
/*
  let pr = new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => res(data))
      .catch((error) => rej(error));
  });
*/

// Real example of handling api with async await
/*
let fetchUser = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(user.phone);
  } catch (error) {
    console.log(`CONNECTION FAILED : ${error}`);
  }
};
fetchUser();

 
*/
