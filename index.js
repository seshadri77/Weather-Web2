const apiKey = "d88aed659102f5a71258a3bfd10bbee9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

  if (data.weather[0].main === "Clouds") {
    document.querySelector(".weather-icon").src = "clouds.jpg";
  } else if (data.weather[0].main === "clear") {
    document.querySelector(".weather-icon").src = "clear.jpg";
  } else if (data.weather[0].main === "rain") {
    document.querySelector(".weather-icon").src = "rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    document.querySelector(".weather-icon").src = "drizzle.jpg";
  } else if (data.weather[0].main === "Mist") {
    document.querySelector(".weather-icon").src = "mist.jpg";
  }
}
checkWeather();
