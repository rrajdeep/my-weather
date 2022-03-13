window.onload = function() {

    $("button").on("click", function(event) {
        var city = $('#search-input').val();
        console.log(city);


        var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a81010a9902afef9144e4917c8ea5eef";

        $.ajax({
            url: searchURL,
            method: "GET"
        }).then(function (data) {
            var cityName = $("<h2>").text(data.name);
            var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
            var typeofWeather = $("<p class='weatherType'>").text(data.weather[0].main);
            var cityTemperature = $("<p class='temperature'>").text(data.main.temp + "°");
            var cityHumidity = $("<p>").text("Humidity: " + data.main.humidity + "%");
            var windSpeed = $("<p>").text("Wind Speed: " + data.wind.speed + " MPH");
            $(".city").empty();
            $(".city").append(cityName, weatherIcon, typeofWeather, cityTemperature, cityHumidity, windSpeed);

        })
    });
}
