const url = "https://api.openweathermap.org/data/2.5/";
const key = "4408404b6e1a5619b80ccb94313db207";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchCity.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const input = document.querySelector('input')
const card = document.querySelector('.card')

input.addEventListener('keypress', updateValue)

function updateValue(e) {
    if(e.keyCode == "13") {
        card.classList.remove('d-none')
        displayResult()
    }
}

const displayResult = (result) => {
  const d = new Date();

  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let min = document.querySelector(".min");
  min.innerText = `En düşük: ${Math.round(result.main.temp_min)}°c`;

  let max = document.querySelector(".max");
  max.innerText = `En yüksek: ${Math.round(result.main.temp_max)}°c`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description.toUpperCase();

  let weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.innerHTML = `<div class="card-text weather-icon">
    <img src = "http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png" />
    </div>`;

    document.querySelector(".time").innerHTML = `${d.toDateString()}`;


};



const searchCity = document.getElementById("searchCity");
searchCity.addEventListener("keypress", setQuery);
