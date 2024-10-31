const fetch = require('node-fetch');

async function createUser(user) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

module.exports = createUser;
