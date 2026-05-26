/**
 * JavaScript Asynchronous Programming Examples
 * Demonstrates: Callbacks, Promises, and Async/Await
 */

// ============================================
// 1. CALLBACK HELL (Anti-pattern - Avoid this)
// ============================================

/**
 * Callback Hell Example
 * This demonstrates deeply nested callbacks that are hard to read and maintain.
 * This pattern should be avoided in modern JavaScript.
 */

function getProfile(username, callback) {
  console.log("Fetching userData....");
  setTimeout(() => {
    callback({ _id: 12323423, username });
  }, 2000);
}

function getPosts(userId, callback) {
  console.log("Fetching user posts....");
  setTimeout(() => {
    callback({ _id: userId, posts: ["instagram posts 1"] });
  }, 2000);
}

function getSavedPosts(userId, callback) {
  console.log("Fetching all saved posts....");
  setTimeout(() => {
    callback({ _id: userId, savedposts: ["gigit", "k2", "ghizer", "phander"] });
  }, 3000);
}

getProfile("anjum", function (userData) {
  console.log("=== CALLBACK HELL EXAMPLE ===");
  console.log("User Data:", userData);
  getPosts(userData._id, function (postsData) {
    console.log("Posts Data:", postsData);
    getSavedPosts(userData._id, function (savedPostsData) {
      console.log("Saved Posts Data:", savedPostsData);
      console.log("=== END CALLBACK HELL EXAMPLE ===\n");
    });
  });
});

// ============================================
// 2. PROMISE PATTERN (Better - Use this)
// ============================================

/**
 * Promise Example with Random Number Generator
 * Demonstrates:
 * - Creating a Promise with resolve and reject
 * - Handling success with .then()
 * - Handling errors with .catch()
 */

let promiseExample = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (randomNumber < 5) resolve(randomNumber);
    else reject(randomNumber);
  }, 1000);
});

promiseExample
  .then((data) => {
    console.log("=== PROMISE PATTERN EXAMPLE ===");
    console.log(`Data received: ${data}`);
    console.log("=== END PROMISE PATTERN EXAMPLE ===\n");
  })
  .catch((error) => {
    console.error("=== PROMISE PATTERN EXAMPLE ===");
    console.error(`CONNECTION FAILED!!! ERROR CODE: ${error}`);
    console.error("=== END PROMISE PATTERN EXAMPLE ===\n");
  });

/**
 * Using Async/Await with an existing Promise
 * Demonstrates:
 * - async function declaration
 * - await keyword to pause execution
 * - try/catch for error handling
 */

let anotherPromise = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (num < 5) resolve(num);
    else reject(num);
  }, 1000);
});

const asyncAwaitExample = async () => {
  try {
    const result = await anotherPromise;
    console.log("=== ASYNC/AWAIT WITH PROMISE EXAMPLE ===");
    console.log(`Promise resolved with: ${result}`);
    console.log("=== END ASYNC/AWAIT WITH PROMISE EXAMPLE ===\n");
  } catch (err) {
    console.error("=== ASYNC/AWAIT WITH PROMISE EXAMPLE ===");
    console.error(`Promise rejected with: ${err}`);
    console.error("=== END ASYNC/AWAIT WITH PROMISE EXAMPLE ===\n");
  }
};

asyncAwaitExample();

// ============================================
// 3. API HANDLING WITH PROMISES
// ============================================

/**
 * Fetching API data using Promises
 * Demonstrates:
 * - fetch() returns a Promise
 * - Chaining .then() for multiple async operations
 * - Converting response to JSON
 * - Error handling with .catch()
 */

let apiPromiseExample = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

apiPromiseExample
  .then((userData) => {
    console.log("=== API HANDLING WITH PROMISE EXAMPLE ===");
    console.log(`User Name: ${userData.name}`);
    console.log(`User Email: ${userData.email}`);
    console.log(`User Phone: ${userData.phone}`);
    console.log("=== END API HANDLING WITH PROMISE EXAMPLE ===\n");
  })
  .catch((error) => {
    console.error("=== API HANDLING WITH PROMISE EXAMPLE ===");
    console.error(`API call failed: ${error}`);
    console.error("=== END API HANDLING WITH PROMISE EXAMPLE ===\n");
  });

// ============================================
// 4. API HANDLING WITH ASYNC/AWAIT (Best)
// ============================================

/**
 * Fetching API data using Async/Await
 * Demonstrates:
 * - async function for cleaner syntax
 * - await to pause execution until Promise resolves
 * - try/catch for error handling
 * - More readable than Promise chains
 */

const fetchUserWithAsyncAwait = async () => {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const userInfo = await apiResponse.json();

    console.log("=== API HANDLING WITH ASYNC/AWAIT EXAMPLE ===");
    console.log(`User Name: ${userInfo.name}`);
    console.log(`User Email: ${userInfo.email}`);
    console.log(`User Phone: ${userInfo.phone}`);
    console.log("=== END API HANDLING WITH ASYNC/AWAIT EXAMPLE ===\n");
  } catch (error) {
    console.error("=== API HANDLING WITH ASYNC/AWAIT EXAMPLE ===");
    console.error(`CONNECTION FAILED: ${error}`);
    console.error("=== END API HANDLING WITH ASYNC/AWAIT EXAMPLE ===\n");
  }
};

fetchUserWithAsyncAwait();

// ============================================
// SUMMARY & BEST PRACTICES
// ============================================

/**
 * Evolution of Asynchronous JavaScript:
 *
 * 1. Callbacks (Old)
 *    - Leads to callback hell
 *    - Hard to read and maintain
 *    - Avoid in modern code
 *
 * 2. Promises (Better)
 *    - Cleaner than callbacks
 *    - Chain multiple operations with .then()
 *    - Better error handling with .catch()
 *
 * 3. Async/Await (Best)
 *    - Reads like synchronous code
 *    - Easiest to understand
 *    - Modern standard (ES8)
 *    - Use try/catch for error handling
 *
 * RECOMMENDATION: Use Async/Await for new code
 */
