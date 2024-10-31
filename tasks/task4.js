const fetch = require('node-fetch');

async function deleteUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  });
  return { status: response.status };
}

module.exports = deleteUser;
