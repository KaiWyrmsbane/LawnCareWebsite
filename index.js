//requirments
require("dotenv").config();

//bring in the express server and create application
const express = require("express");
const app = express();

console.log(process.env);

//use the express apiRouter object
let apiRouter = express.Router();

//create GET for weatherbit
apiRouter.get("/", function (req, res, next) {
  res.send("Kai Wyrmsbane");
});

//Configure apiRouter so all routes are prefixed with /api/v1
app.use("/api/", apiRouter);

//Create server to listen
var server = app.listen(5000, function () {
  console.log("Node server is running on http://localhost:5000..");
});
