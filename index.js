const handleCity = async () => {
  document.getElementById("default-div").classList.add("hidden");
  const searchedCity = document.getElementById("search-bar").value;
  const res = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=aee76e3a4e9890862770985ef297240e&units=metric`
  );

  const data = await res.json();
  if (data.cod === "404") {
    alert("wrong name");
  }
  showInfo(data);
};
const showInfo = (info) => {
  const weatherImage = document.getElementById("weather-img");
  if (info.weather[0].main === "Clouds") {
    weatherImage.src = `images/clouds.png`;
  }
  if (info.weather[0].main === "Clear") {
    weatherImage.src = `images/clear.png`;
  }
  if (info.weather[0].main === "Rain") {
    weatherImage.src = `images/rain.png`;
  }
  if (info.weather[0].main === "Drizzle") {
    weatherImage.src = `images/drizzle.png`;
  }
  if (info.weather[0].main === "Mist") {
    weatherImage.src = `images/mist.png`;
  }
  if (info.weather[0].main === "Snow") {
    weatherImage.src = `images/snow.png`;
  }

  const temp = document.getElementById("temp");
  const cityName = document.getElementById("city-name");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  temp.innerText = ` ${info.main.temp}`;
  feelsLike.innerText = `Feels like : ${info.main.feels_like}`;
  cityName.innerText = ` ${info.name}`;
  humidity.innerText = ` ${info.main.humidity}%`;
  windSpeed.innerText = ` ${info.wind.speed}%`;
};
