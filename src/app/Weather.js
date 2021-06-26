
export class Weather{

    constructor(pCity, pCountryCode){
        this.city = pCity;
        this.countryCode = pCountryCode;
        this.apiKey = process.env.KEY;
    }
    

    async getWeather(){
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric&lang=es`;

        // Opción 1
        // return fetch(baseUrl)
        //     .then(response => response.json())
        //     .catch(err => console.log('Error', err));

        // Opción 2
        const receivedData = await fetch(baseUrl);
        return receivedData.json();
    }

    changeLocation(pNewCity, pNewCountryCode){
        this.city = pNewCity;
        this.countryCode = pNewCountryCode;
    }
}