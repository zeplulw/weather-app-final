const express = require('express');
const XMLHttpRequest = require('xhr2');
const app = express();

app.use(express.json())
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/', (req, res) => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://api.weatherapi.com/v1/current.json");
  xhr.setRequestHeader("key", "e39ab1f6551344a38e4180431222903");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    res.send(xhr.responseText);
  }};

  const body = req.body
  
  var data = `q=${body["zipcode"]}`;
  
  xhr.send(data);
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});