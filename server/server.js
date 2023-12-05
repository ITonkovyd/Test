const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const app = express();
const PORT = process.env.PORT || 3000;
const { getUsers } = require("./controlers/users.controler");
const { logIn, registerUser } = require("./controlers/auth.controler");
const { users } = require("./mocks/users.mock");

// для виправлення cors помилки при логіні
app.use(cors());
// bodyParser для можливості парсити отримані від користувача дані
app.use(bodyParser.json());

// реалізація надання JWT токена
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
    },
    function (jwtPayload, done) {
      // done - колбек, який передає у passport результат логіну. Приймає 2 параметри: 1 - помилка, 2 - дані користувача
      console.log(jwtPayload);
      const user = users.find((user) => user.email === jwtPayload.email);
      if (!user) {
        console.log("log1");
        // оскільки юзера з введеними даними не знайдень - повертаю в колбек помилку
        return done(new Error("User not found."));
      }
      // якщо є юзер, то першим параметром віддаю null, оскільки помилки немає, а другим параметром передаю дані користувача
      return done(null, user);
    }
  )
);

// видача списка юзерів по запиту за ендпоінтом /api/users
app.get(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  getUsers
);

app.post("/api/register", registerUser);

// опис спроби логіну корисувача за ендпоінтом /api/login
app.post("/api/login", logIn);

// слухач порту
app.listen(PORT, () => {
  console.log(`Port equals: ${PORT}`);
  console.log(users);
});
