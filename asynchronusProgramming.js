function getProfile(user, fn) {
  console.log("Fetching userData....");

  setTimeout(() => {
    fn({ _id: 12321, user });
  }, 2000);
}

function getPosts(id, fn) {
  console.log("Fetching posts");

  setTimeout(() => {
    fn({ _id: id, posts: ["hey", "this", "is", "posts"] });
  }, 2000);
}
getProfile("anjum", function (data) {
  console.log(data);
  getPosts(data._id, function (posts) {
    console.log(posts);
  });
});
