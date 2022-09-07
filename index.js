window.onload = function () {
    var weatherObj;
    document.getElementsByTagName("button")[0].onclick = function () {
        city = document.getElementById("search-input").value;
        // Craeting openweather URL:
        var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a81010a9902afef9144e4917c8ea5eef";

        // xmlHttpRequest:
        var xhttp = new XMLHttpRequest;
        xhttp.onload = function () {
            const xmlDoc = xhttp.responseText;
            weatherObj = JSON.parse(xmlDoc);
            displayWeather(weatherObj);
            // clear search input value:
            document.getElementById("search-input").value = "";
        }
        xhttp.open("GET", searchURL, true);
        xhttp.send();
    }
    // Deisplay weather data in weather box:
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
}
