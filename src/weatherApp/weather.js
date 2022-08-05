const express = require("express");

var request = require("request");
const router = express.Router();

router.post("", function (req, res, next) {
  url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Bengaluru&appid=53941fa98e9862077147a68af131b707&cnt=5";

  request(url, function (error, response, body) {
    let weather = JSON.parse(body);
    //  console.log(weather);
    if (error && response.statusCode != 200) {
      throw error;
    }

    let data = [];
    for (var i = 0; i < weather.cnt; i++) {
      let obj = {
        date: weather.list[i].dt_txt,
        temp: weather.list[i].main.temp,
        main: weather.list[i].weather[0].main,
      };
      data.push(obj);
    }

    res.send({ Count: 5, unit: "metric", location: "Banglore", data: data });
  });
});

module.exports = router;
