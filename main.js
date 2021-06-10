/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var weather = {
  "appKey": "6e41735b91d06f5bc7408015f491a2c1",
  fetchWeather: function fetchWeather(city) {
    var _this = this;

    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.appKey).then(function (response) {
      return response.json();
    }).then(function (data) {
      return _this.displayWheater(data);
    });
  },
  displayWheater: function displayWheater(data) {
    var name = data.name;
    var _data$weather$ = data.weather[0],
        icon = _data$weather$.icon,
        description = _data$weather$.description;
    var _data$main = data.main,
        temp = _data$main.temp,
        humidity = _data$main.humidity;
    var speed = data.wind.speed;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "ºC";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function search() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    weather.search();
  }
});
weather.fetchWeather("Queretaro");
/******/ })()
;
//# sourceMappingURL=main.js.map