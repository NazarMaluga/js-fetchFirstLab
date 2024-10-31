const fetch = require('node-fetch');

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const users = [];
  for (let i = 0; i < data.length; i++) {
    users.push({ id: data[i].id, name: data[i].name });
  }
  return users;
}

module.exports = fetchUsers;
