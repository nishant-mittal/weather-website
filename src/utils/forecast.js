const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=14b009bec8eb6e1b05bc17aaa158f30f&query=" +
    lat +
    "," +
    lon +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Could not connect to weather service", undefined);
    } else {
      if (body.error) {
        callback(body.error.info, undefined);
      } else {
        callback(
          undefined,
          `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature} out. It feels like ${body.current.feelslike}`
        );
      }
    }
  });
};

module.exports = forecast;
