const passport = require("passport");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.find({ email: email });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        await bcrypt.compare(password, user[0]?.password);
        return done(null, user, { message: "Login successfull" });
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id || user);
});

passport.deserializeUser((id, done) =>
  User.find({ _id: id }).then((user) => done(null, user))
);

module.exports = passport;
