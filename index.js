window.onload = function () {
    var city;
    var obj;
    document.getElementsByTagName("button")[0].onclick = function () {
        city = document.getElementById("search-input").value;
        // Craeting openweather URL:
        var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a81010a9902afef9144e4917c8ea5eef";
        console.log(searchURL);

        // xmlHttpRequest:
        var xhttp = new XMLHttpRequest;
        xhttp.onload = function () {
            const xmlDoc = xhttp.responseText;
            obj = JSON.parse(xmlDoc);
            displayWeather(obj);
        }
        xhttp.open("GET", searchURL, true)
        xhttp.send();
    }
    // Deisplay weather data in weather box:
    function displayWeather(obj) {
        let weatherBox = document.getElementsByClassName("weather");
        let imgUrl = "https://openweathermap.org/img/wn/" + obj.weather[0].icon + ".png";
        weatherBox[0].innerHTML = "<h2>" + obj.name + "</h2>" +
            "<img src=" + imgUrl + " " + "alt='weather-image'>" +
            "<p clas='weatherType'>" + obj.weather[0].description + "</p>" +
            "<p class='temperature'>" + obj.main.temp + "°</p>" +
            "<p> Feels like " + obj.main.feels_like + "°</p>" +
            "<p>" + "Humidity: " + obj.main.humidity + "%" + "</p>" +
            "<p>" + "Wind Speed: " + obj.wind.speed + "MPH" + "</p>";
        city.value = " ";
    }
}
