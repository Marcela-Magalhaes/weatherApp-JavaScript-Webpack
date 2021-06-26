export class Store{

    constructor(){
        this.city = '';
        this.countryCode = '';
        this.defaultCity = 'Madrid';
        this.defaultCountry = 'ES';
    }

    setLocalStorage(pCity, pCountryCode){
        localStorage.setItem('city', pCity);
        localStorage.setItem('countryCode', pCountryCode);
    }
    getLocalStorageData(){
        const storedCity = localStorage.getItem('city');
        const storedCountryCode = localStorage.getItem('countryCode');
        
        if(storedCity === null || storedCity === ''){
            this.city = this.defaultCity;
        } else {
            this.city = storedCity;
        }

        if(storedCountryCode === null || storedCountryCode === ''){
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = storedCountryCode;
        }

        return {
            city: this.city, 
            countryCode: this.countryCode
        };
    }
}