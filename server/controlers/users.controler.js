const { users } = require("../mocks/users.mock");

const getUsers = (req, res) => {
  console.log("users");
  return res.json(users);
};

module.exports = { getUsers };
