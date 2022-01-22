const express = require("express");
const indexRoutes = require("./routes/index.routes");
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan= require('morgan')
const mongooseLoader= require('./config/database')

require ('./config/passport')
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    secret: "examen-tecnico",
    resave: false,
    saveUninitialized: true,
  })
  );


  app.use(passport.initialize());
  app.use(passport.session());
  
  
  //routes
  app.use("/api", indexRoutes);

mongooseLoader()
  .then(() => {
    console.log("Db loaded and connected");
    app.listen(3001, () => {
      console.log(`Example app listening at http://localhost:3001`);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;
