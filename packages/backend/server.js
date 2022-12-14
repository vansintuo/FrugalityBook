// exporting any method from mongo
const express = require("express");
const mongoose = require("mongoose");
const { databaseUrl, sellerBaseUrl } = require("./utils/constant/baseUrls");
// // type of whether what data user input
const bodyParser = require("body-parser");
const morgan = require("morgan");
// using dotenv
const dotenv = require("dotenv");
const app = express();
// access block by cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// using socket.io
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
// log request (see data of user requests)
app.use(morgan("tiny"));
// catch data using body parser
app.use(bodyParser.urlencoded());
// catch data using file as json
app.use(express.json());
// access to file path that store data in env file that it's hidden when we push to bitbucket
dotenv.config({ path: "config.env" });
// it is port that store in env file
const PORT = process.env.PORT;
//call connection that connect to data base
const connectionDB = require("./utils/db/connection");
connectionDB();
// function socket.io;
const io = socketio(server, {
  transports: ["polling"],
  cors: {
    origin: [sellerBaseUrl], // we can use array instead of if it has more than one url
  },
});
io.on("connection", (socket) => {
  console.log("::::::::::::::::::::::client is connected");
});
module.exports = io;
// calling rout from route files
app.get("/", (req, res) => {
  res.send("This is Frugalitybook api!!");
});
require("./routers/book.routes")(app);
require("./routers/user.routes")(app);
require("./routers/category.routes")(app);
require("./routers/checkout.routes")(app);
require("./routers/status.routes")(app);
// listen is used to define port that we run on
server.listen(PORT, () => {
  console.log(`server is starting  http://localhost:${PORT}`);
  console.log(`seller base url :::${sellerBaseUrl}`);
  console.log(`data base url :::::${databaseUrl}`);
});
