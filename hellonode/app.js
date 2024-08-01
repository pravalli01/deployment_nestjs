require('dotenv').config();

var express = require('express');
var app = express();
const emessage = process.env.MESSAGE;

app.get('/', function (req, res) {
  res.send(emessage);
});
app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/health', (req, res) => {
  res.send('OK');
});
