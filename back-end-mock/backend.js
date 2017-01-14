var express = require("express");
var app = express();

/* Serves all static files */
app.get(/^(.+)$/, function (req, res) {
  var filename = req.params[0].replace('/backend/rest/', '/data/') + '.json';
  res.sendFile(__dirname + filename);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Listening on " + port);
});
