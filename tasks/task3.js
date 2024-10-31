const fetch = require('node-fetch');

async function updateUser(id, updatedData) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  return data;
}

module.exports = updateUser;
