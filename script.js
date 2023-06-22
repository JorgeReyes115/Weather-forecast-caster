var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#cityname");
var searchHistory = document.querySelector("#storedCities");

var storeCities = function(city) {
    var cities = JSON.parse(localStorage.getItem("city")) || [];

    for (var i = 0; i < cities.length; i ++) {
        if (cities[i]===city) {
            return
        }
    }
}
if (cities.length >= 5){
    cities.shift();
}
cities.push(city);
localStorage.setItem("index", JSON.stringify(cities));


var apiKey = "aa2c34541fa1a97b873aefe0cf6034e2"
function getGeo(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        getWeather(data[0].lat, data[0])
        getForecast(data[0].lat, data[0])
    })
}

function getWeather() {
    fetch("api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}").then(response => response.json())
    .then(data => {
        console.log(data)
        var CityName = $("<h2>").addClass("card-Text").text(data.name)
        var cityInfo = $("div").addClass("card-body")
        var currentWeather = $(".currentWeather")
        var today = new Date()
        var day = today.getMonth() + 1
        var date = $("h3").addClass("card-text").text("/" + day + "/" + today.getFullYear() + "/")

        cityInfo.append(CityName)
        cityInfo.append(date)
        currentWeather.append(CityName)

        currentTemp.append  ("<p>" + "Temperature: " + response.main.temp + "</p>");
        currentTemp.append ("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
        currentTemp.append ("<p>" + "Wind Speed: " + response.wind.speed + "</p>");

    })
}

function getFiveDayForecast() {
    fetch("api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}").then(response => response.json())
    .then(data => {


        var forecastContainer = $("forecast-container"). addClass("col-12 col-md-8");
        forecastContainer.clear();
        console.log(data)
        forecastContainer.append(forecastWeather)
        var today = new Date()
        var day = today.getMonth() + 1

        for (i=1; i <= 5;)
        var forecastWeather = $("<div>").addClass('card-body text-center bg-primary')
        console.log(forecastWeather)


    })
}


function lookSearches(){
    $("pastSearches").empty();
    for (let i=1; i< searchHistory.length;) {

        var searchButton = $(".searchButton");
        $("pastSearches").append(searchButton)
        searchButton.click(searchHistory)
    }

userFormEl.addEventListener("submit", lookSearches )
    

};

