const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=14b009bec8eb6e1b05bc17aaa158f30f&query=bangalore&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    console.log(JSON.parse(data).request.query);
  });
});

request.end();
