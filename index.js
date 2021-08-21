const port = 8444;
const express = require("express");
var fs = require("fs");
var cors = require('cors')

var https = require("https");
const { Console } = require("console");
var privateKey = fs.readFileSync("cert/server.key", "utf8");
var certificate = fs.readFileSync("cert/server.crt", "utf8");
var credentials = { key: privateKey, cert: certificate };

const app = express();
var httpsServer = https.createServer(credentials, app);
var httpsServer2 = https.createServer(credentials, app);

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// https://localhost:8444/hello.html
app.use(express.static("public"));

httpsServer.listen(port, () =>
  console.log(`Server listening on https port: ${port}`)
);


