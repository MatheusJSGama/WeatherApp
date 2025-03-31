const btnSearch = document.getElementById("btn")
const searchBox = document.querySelector(".search-box")
const error = document.querySelector(".error-message")
import { weatherObject } from "./weather-object.js"
import { screen } from "./screen.js"
import { apikey } from "./config.js"



btnSearch.addEventListener("click", () => {
    const cityRequest = searchBox.value
    weatherData(cityRequest)
})

searchBox.addEventListener("keyup", (e) => {
    const cityRequest = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        weatherData(cityRequest)
    }

})

async function getWeather(cityRequest) {
    const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${cityRequest}&lang=pt_br&appid=${apikey}&units=metric&end`)
    return await response.json()
}

async function weatherData(cityRequest) {
    const weatherinfos = await getWeather(cityRequest)
    console.log(weatherinfos);

    if (weatherinfos.cod !== 200) {
        errorCode(weatherinfos.cod)
        showError()
        dataToError()
    } else {
        showData()
        errorToData()
    }

    weatherObject.setInfo(weatherinfos)
    screen.setScreen(weatherObject)
}

function errorCode(code) {
    switch (code) {
        case "400":
            error.innerHTML = "ERRO: Campo de pesquisa vazio, tente novamente."
            break
        case "404":
            error.innerHTML = "ERRO: Cidade não encontrada, tente novamente."
            break
        case "429":
            return error.innerHTML = "ERRO: Muitas requisições feitas, aguarde e tente novamente"
    }
}

function dataToError() {
    screen.weatherConteiner.classList.remove("open")
    document.querySelector(".infos").classList.remove("show")
    error.classList.remove("error-close")
    error.classList.add("error-open")
}

function errorToData() {
    screen.weatherConteiner.classList.remove("error")
    error.classList.add("error-close")
}

function showData() {
    screen.weatherConteiner.classList.add("open")
    document.querySelector(".infos").classList.add("show")
}

function showError() {
    screen.weatherConteiner.classList.add("error")
}

