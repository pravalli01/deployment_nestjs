require('dotenv').config();

var express = require('express');
var app = express();
const port = process.env.PORT || 8080;
const emessage = process.env.MESSAGE;

if (!emessage) {
  console.error('MESSAGE environment variable is not set.');
  process.exit(1);
}

app.get('/', function (req, res) {
  res.send(emessage);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
