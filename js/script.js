
// Constants and Variables

const weatherFor = $('#Weatherfor')
const temp = $("#temp")
const feelsLike = $('#Feelslike')
const weather = $('#Weather')

const API_KEY = '5589c4349d220d02f17ab6d3c388e4c9';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

//q={city name}&appid={API key}'

// Functions
function handleGetData(weatherData) {

    weatherFor.text("Weather for: " + weatherData.name)
    temp.text("Temperature: " + weatherData.main.temp)
    feelsLike.text("Feels like: " + weatherData.main.feels_like)
    weather.text("Weather: " + weatherData.weather[0].description)
}

let generate = $("#submit");
generate.on("click", function(event) {

    var inputVal = $("#userInput").val()


$.ajax(BASE_URL + `q=${$("#userInput").val()}&appid=` + API_KEY + "&units=imperial")
.then(function(data) {
    console.log('Data: ', data);
    handleGetData(data)
}, function(error) {
    console.log('Error: ', error);
})
})
