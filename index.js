window.onload = function () {
    var weatherObj;
    var forecastObj;
    var wURL;
    var fURL;
    var forecastData;
    document.getElementsByTagName("button")[0].onclick = function () {
        city = document.getElementById("search-input").value;
        // Craeting openweather URL:
        wURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a81010a9902afef9144e4917c8ea5eef";
        fURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=a81010a9902afef9144e4917c8ea5eef"

        // xmlHttpRequest:
        var xhttp1 = new XMLHttpRequest;
        xhttp1.onload = function () {
            const xmlDoc = xhttp1.responseText;
            weatherObj = JSON.parse(xmlDoc);
            console.log(weatherObj);
            displayWeather(weatherObj);
            // clear search input value:
            document.getElementById("search-input").value = "";
        }
        xhttp1.open("GET", wURL, true);
        xhttp1.send();

        // fetch forecast
        fetch(fURL)
            .then((response) => response.json())
            .then((data) => {
                displayForecast(data);
            });
    }

    // Deisplay currenrt weather data in weather box:
    function displayWeather(obj) {
        let weatherBox = document.getElementsByClassName("weather");
        let imgUrl = "https://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png";

    // Capitalize first letter of weather description:
    let weatherDescription = obj.weather[0].description;
    weatherDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
    weatherBox[0].innerHTML = "<h2>" + obj.name + "</h2>" +
        "<img src=" + imgUrl + " " + "alt='weather-image'>" +
        "<p clas='weatherType'>" + weatherDescription + "</p>" +
        "<p class='temperature'>" + obj.main.temp + "°</p>" +
        "<p> Feels like " + obj.main.feels_like + "°</p>" +
        "<p>" + "Humidity: " + obj.main.humidity + "%" + "</p>" +
        "<p>" + "Wind Speed: " + obj.wind.speed + "MPH" + "</p>";
    }

    function displayForecast(obj) {
        // day 1
        document.getElementById("day1").innerHTML =
            "<p>" + obj.list[0].dt_txt.slice(0, 10) + "</p>" +
            "<img src=" + "https://openweathermap.org/img/wn/" + obj.list[0].weather[0].icon + ".png" + " " + "alt='weather-icon'>" +
            "<p>" + obj.list[0].weather[0].main + "</p>" +
            "<p class='temperature'>" + obj.list[0].main.temp_max + "°</p>" +
            "<p>" + "Humidity: " + obj.list[0].main.humidity + "%" + "</p>";

        // day 2
        document.getElementById("day2").innerHTML =
            "<p>" + obj.list[8].dt_txt.slice(0, 10) + "</p>" +
            "<img src=" + "https://openweathermap.org/img/wn/" + obj.list[8].weather[0].icon + ".png" + " " + "alt='weather-icon'>" +
            "<p>" + obj.list[8].weather[0].main + "</p>" +
            "<p class='temperature'>" + obj.list[8].main.temp_max + "°</p>" +
            "<p>" + "Humidity: " + obj.list[8].main.humidity + "%" + "</p>";

        // day 3
        document.getElementById("day3").innerHTML =
            "<p>" + obj.list[16].dt_txt.slice(0, 10) + "</p>" +
            "<img src=" + "https://openweathermap.org/img/wn/" + obj.list[16].weather[0].icon + ".png" + " " + "alt='weather-icon'>" +
            "<p>" + obj.list[16].weather[0].main + "</p>" +
            "<p class='temperature'>" + obj.list[16].main.temp_max + "°</p>" +
            "<p>" + "Humidity: " + obj.list[16].main.humidity + "%" + "</p>";

        // day 4
        document.getElementById("day4").innerHTML =
            "<p>" + obj.list[24].dt_txt.slice(0, 10) + "</p>" +
            "<img src=" + "https://openweathermap.org/img/wn/" + obj.list[24].weather[0].icon + ".png" + " " + "alt='weather-icon'>" +
            "<p>" + obj.list[24].weather[0].main + "</p>" +
            "<p class='temperature'>" + obj.list[24].main.temp_max + "°</p>" +
            "<p>" + "Humidity: " + obj.list[24].main.humidity + "%" + "</p>";

        // day 5
        document.getElementById("day5").innerHTML =
            "<p>" + obj.list[32].dt_txt.slice(0, 10) + "</p>" +
            "<img src=" + "https://openweathermap.org/img/wn/" + obj.list[32].weather[0].icon + ".png" + " " + "alt='weather-icon'>" +
            "<p>" + obj.list[32].weather[0].main + "</p>" +
            "<p class='temperature'>" + obj.list[32].main.temp_max + "°</p>" +
            "<p>" + "Humidity: " + obj.list[32].main.humidity + "%" + "</p>";
    }
}
