const weatherObject = {
    image: "",
    temp: "",
    climate: "",
    tempMax: "",
    tempMin: "",
    wind: "",
    humidity: "",
    setInfo(weatherData){
        this.image = weatherData.weather[0].icon
        this.temp = weatherData.main.temp
        this.climate = weatherData.weather[0].description
        this.tempMax = weatherData.main.temp_max
        this.tempMin = weatherData.main.temp_min
        this.wind = weatherData.wind.speed
        this.humidity = weatherData.main.humidity
    }
}

export  { weatherObject }