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




function displayForecast(obj) {
    // day 1
    var day1 = obj.list[0].dt_txt.slice(0,10);
    var imgUrl1 = "https://openweathermap.org/img/wn/" + obj.list[0].weather[0].icon + ".png";
    var weatherType1 = obj.list[0].weather[0].main;
    var temp1 = obj.list[0].main.temp_max;
    var humidity1 = obj.list[0].main.humidity + "%";
    document.getElementById("day1").innerHTML = 
        "<p>" + day1 + "</p>" + 
        "<img src=" + imgUrl1 + " " + "alt='weather-image1'>" + 
        "<p>" + weatherType1 + "</p>" + 
        "<p class='temperature'>" + temp1 + "°</p>" +
        "<p>" + "Humidity: " + humidity1 + "%" + "</p>";

        // day 2
        var day2 = obj.list[8].dt_txt.slice(0,10);
        var imgUrl2 = "https://openweathermap.org/img/wn/" + obj.list[8].weather[0].icon + ".png";
        var weatherType2 = obj.list[8].weather[0].main;
        var temp2 = obj.list[8].main.temp_max;
        var humidity2 = obj.list[8].main.humidity + "%";

        document.getElementById("day2").innerHTML = 
        "<p>" + day2 + "</p>" + 
        "<img src=" + imgUrl2 +" " + "alt='weather-image1'>" + 
        "<p>" + weatherType2 + "</p>" + 
        "<p class='temperature'>" + temp2 + "°</p>" +
        "<p>" + "Humidity: " + humidity2 + "%" + "</p>";

    // day 3
    var day3 = obj.list[16].dt_txt.slice(0,10);
    var imgUrl3 = "https://openweathermap.org/img/wn/" + obj.list[16].weather[0].icon + ".png";
    var weatherType3 = obj.list[16].weather[0].main;
    var temp3 = obj.list[16].main.temp_max;
    var humidity3 = obj.list[16].main.humidity + "%";

    document.getElementById("day3").innerHTML = 
    "<p>" + day3 + "</p>" + 
    "<img src=" + imgUrl3 +" " + "alt='weather-image1'>" + 
    "<p>" + weatherType3 + "</p>" + 
    "<p class='temperature'>" + temp3 + "°</p>" +
    "<p>" + "Humidity: " + humidity3 + "%" + "</p>";

    // day 4
    var day4 = obj.list[24].dt_txt.slice(0,10);
    var imgUrl4 = "https://openweathermap.org/img/wn/" + obj.list[24].weather[0].icon + ".png";
    var weatherType4 = obj.list[24].weather[0].main;
    var temp4 = obj.list[24].main.temp_max;
    var humidity4 = obj.list[24].main.humidity + "%";

    document.getElementById("day4").innerHTML = 
    "<p>" + day4 + "</p>" + 
    "<img src=" + imgUrl4 +" " + "alt='weather-image1'>" + 
    "<p>" + weatherType4 + "</p>" + 
    "<p class='temperature'>" + temp4 + "°</p>" +
    "<p>" + "Humidity: " + humidity4 + "%" + "</p>";

    // day 5
    var day5 = obj.list[32].dt_txt.slice(0,10);
    var imgUrl5 = "https://openweathermap.org/img/wn/" + obj.list[32].weather[0].icon + ".png";
    var weatherType5 = obj.list[32].weather[0].main;
    var temp5 = obj.list[32].main.temp_max;
    var humidity5 = obj.list[32].main.humidity + "%";

    document.getElementById("day5").innerHTML = 
    "<p>" + day5 + "</p>" + 
    "<img src=" + imgUrl5 +" " + "alt='weather-image1'>" + 
    "<p>" + weatherType5 + "</p>" + 
    "<p class='temperature'>" + temp5 + "°</p>" +
    "<p>" + "Humidity: " + humidity5 + "%" + "</p>";
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
