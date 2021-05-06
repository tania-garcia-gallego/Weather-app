
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getUTCDay()];
let today = document.querySelector("#date");
today.innerHTML = `${day}, ${now.getHours()}:${now.getMinutes()}`;


//Week 5

function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  let apiKey = "751305c75f9526727cdf4f36e45a4e75";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(getTemperature);
}

function getTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = `${temperature}°C`;
  let minTemp = Math.round(response.data.main.temp_min);
  let showminTemp = document.querySelector("#minTemp");
  showminTemp.innerHTML = `Min ${minTemp}°C`;
  let maxTemp = Math.round(response.data.main.temp_max);
  let showmaxTemp = document.querySelector("#maxTemp");
  showmaxTemp.innerHTML = `Max ${maxTemp}°C`;
  let cityHeader = document.querySelector("h1");
  cityHeader.innerHTML = response.data.name;
}

let formInput = document.querySelector("#form");
formInput.addEventListener("submit", getCity);

//bonus feature

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "751305c75f9526727cdf4f36e45a4e75";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemperature);
  console.log(apiUrl);
}

function getLocation(event) {
    event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let position = document.querySelector("button");
position.addEventListener("click", getLocation);
