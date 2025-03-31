const screen = {
    page: document.querySelector(".page"),
    weatherConteiner: document.querySelector(".weather-container"),
    imageBox: document.querySelector(".climate-info img"),
    temp: document.querySelector(".temp"),
    climate: document.querySelector(".climate-description"),
    tempMax: document.querySelector(".temp-max"),
    tempMin: document.querySelector(".temp-min"),
    wind: document.querySelector(".wind"),
    humidity: document.querySelector(".humidity"),
    setScreen(weatherObject){
        this.imageBox.src = `https://openweathermap.org/img/wn/${weatherObject.image}@2x.png`
        this.climate.innerHTML = `<span>CLIMA</span>: ${weatherObject.climate.toUpperCase()}`
        this.temp.innerHTML = `<span>TEMPERATURA</span>: ${weatherObject.temp.toFixed(1)}°C `
        this.tempMax.innerHTML = `${weatherObject.tempMax.toFixed(1)}°C`
        this.tempMin.innerHTML = `${weatherObject.tempMin.toFixed(1)}°C`
        this.wind.innerHTML = `${weatherObject.wind.toFixed(1)} M/s`
        this.humidity.innerHTML = `${weatherObject.humidity}%`
    }
}

export { screen }