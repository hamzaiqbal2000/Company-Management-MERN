require("express-async-errors");
const winston = require("winston");
var cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/validation")();
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5001");
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`listening on ${port}..`));
