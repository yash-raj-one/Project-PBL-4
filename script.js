async function getWeather(){

  const apiKey = "90289fd1d47ca0779fdf09a79cb4bad4";

  const city =
  document.getElementById("city").value;

  const apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response =
  await fetch(apiUrl);

  const data =
  await response.json();

  document.querySelector(".city").innerHTML =
  data.name;

  document.querySelector(".temp").innerHTML =
  Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML =
  data.main.humidity + "%";

  document.querySelector(".wind").innerHTML =
  data.wind.speed + " km/h";
}