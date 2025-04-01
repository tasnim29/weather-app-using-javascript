const handleCity = async () => {
  const searchedCity = document.getElementById("search-bar").value;
  const res = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=aee76e3a4e9890862770985ef297240e&units=metric`
  );
  const data = await res.json();
  showInfo(data);
};
const showInfo = (info) => {
  const temp = document.getElementById("temp");
  const cityName = document.getElementById("city-name");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  temp.innerText = ` ${info.main.temp}`;
  feelsLike.innerText = `Feels like : ${info.main.feels_like}`;
  cityName.innerText = ` ${info.name}`;
  humidity.innerText = ` ${info.name}`;
};
