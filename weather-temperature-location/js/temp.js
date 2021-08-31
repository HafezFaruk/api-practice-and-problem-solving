/*
Title: Weather Temperature App
Description: Weather App Manupulation
Date: 29/08/2021
Private api
api link : api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Api Key:ace8fd8137a545957a099758645eb497
*/


let loc = document.getElementById('location');
let city = document.getElementById('city');
let today = new Date()
let date = document.getElementById('date');
date.innerText = dateFunction(today);
let current = document.getElementById('current');
let weather = document.getElementById('weather');
let temp = document.getElementById('temp');
let temprange = document.getElementById('temp-range')
let tempicon = document.getElementById('temp-icon');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');
let iconfile;
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';
})
const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ace8fd8137a545957a099758645eb497`,

            { mode: 'cors' }

        );
        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        temp.textContent = Math.round(feels_like - 273);
        //tempvalue.textContent = Math.round(feels_like - 273);

        if (id < 300 && id > 200) {
            tempicon.src = "./icons/thunder.png"
        }
        else if (id < 400 && id > 300) {
            tempicon.src = "./icons/cloud-shade.png"
        }
        else if (id < 500 && id > 400) {
            tempicon.src = "./icons/rain.png"
        }
        else if (id < 600 && id > 500) {
            tempicon.src = "./icons/snow.png"
        }
        else if (id < 700 && id > 600) {
            tempicon.src = "./icons/clouds.png"
        }
        else if (id < 800 && id > 700) {
            tempicon.src = "./icons/clouds-sun.png"
        }
    }
    catch (error) {
        alert('city not found')
    }
}
function dateFunction(d) {
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec',]
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day} ${date} ${month} ${year}`
}