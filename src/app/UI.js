export class UI{

    constructor(){
        this.location = document.getElementById('weather-location');
        this.description = document.getElementById('weather-description');
        this.icon = document.getElementById('weather-icon');
        this.temp = document.getElementById('weather-temp');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(pWeather){
        
        this.location.textContent = `${pWeather.name}, ${pWeather.sys.country}`;
        this.description.textContent = pWeather.weather[0].description;
        this.icon.src = `http://openweathermap.org/img/wn/${pWeather.weather[0].icon}@2x.png`;
        this.temp.textContent = (pWeather.main.temp).toFixed(1) +'°C';
        this.humidity.textContent = `Humidity: ${pWeather.main.humidity}%`;
        this.wind.textContent = `Wind: ${pWeather.wind.speed} m/s`;
    }
}
