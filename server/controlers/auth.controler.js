const jwt = require("jsonwebtoken");
const { users } = require("../mocks/users.mock");

console.log(users);

// реалізація логіки логіна
const logIn = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // пошук співпадіння отриманих від юзера реєстраційних даних з наявними у базі
  const isCredentials = users.some(
    (user) => user.email === email && user.password === password
  );
  // об'єкт повернення при успішному логіні
  if (isCredentials) {
    const token = jwt.sign({ email, password }, "your_jwt_secret");
    return res.status(200).json({ email, token });
  }
  // повернення об'єкта з помилкою, у випадку відсутності реєстраційних даних в базі
  return res.status(401).json({
    success: false,
    message: "Unauthorized. User with this credentials isn`t exist!",
  });
};

// логіка реєстрації нового користувача
const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Перевірка, чи існує користувач з такою ж електронною поштою у вашій базі
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(401).json({
      success: false,
      message: "This user is already exist!",
    });
  }

  // Якщо користувача з такою електронною поштою немає, то додаємо нового користувача до масиву

  const newUser = { name, email, password }; //
  users.push(newUser);
  const token = jwt.sign({ email, password }, "your_jwt_secret");

  // Оповіщення про успішну реєстрацію
  return res.status(201).json({
    success: true,
    message: "User successfully registered!",
    email,
    token,
  });
};

module.exports = { logIn, registerUser };
