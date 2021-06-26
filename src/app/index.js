require('./index.css');
const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const { city, countryCode } = store.getLocalStorageData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather(){
   const receivedData = await weather.getWeather();
   ui.render(receivedData);
}

document.getElementById('weather-button').addEventListener('click', (eventInfo) => {
   const newCity = document.getElementById('city').value;
   const newCountryCode = document.getElementById('countryCode').value; 

   weather.changeLocation(newCity, newCountryCode);
   store.setLocalStorage(newCity, newCountryCode);
   fetchWeather();
  // eventInfo.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);