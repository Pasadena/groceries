var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
  console.log("App has started");
})
