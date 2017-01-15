var express = require("express");
var app = express();

/* Serves all static files */
app.get(/^(.+)$/, function (req, res) {
  console.log(req.params[0]);
  var filename = req.params[0].replace('/api/rest/', '/data/') + '.json';
  res.sendFile(__dirname + filename);
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Listening on " + port);
});
