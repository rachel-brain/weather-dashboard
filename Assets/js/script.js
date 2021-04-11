// WHEN I view the UV index (note that the UV Index is an API version of openweathermap I did not use)
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// 1. CHOOSE CITY WITH COUNTRY CODE
// 2. FETCH CURRENT WEATHER DATA ABOUT CHOSEN CITY
// 3. FETCH 5-DAY WEATHER FORECAST DATA ABOUT CHOSEN CITY

// var requestCurrentUrl = 'http://api.openweathermap.org/data/2.5/weather?q={cityName},{countryCode}&units=metric&appid=5f032585108c80fe6cb544e3869e6a7f';
// var requestForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q={cityName},{countryCode}&units=metric&appid=5f032585108c80fe6cb544e3869e6a7f';

// THESE WORK:
// http://api.openweathermap.org/data/2.5/weather?q=doncaster,au&units=metric&appid=5f032585108c80fe6cb544e3869e6a7f
// http://api.openweathermap.org/data/2.5/forecast?q=seattle,USA&units=metric&appid=5f032585108c80fe6cb544e3869e6a7f


// let temp = document.querySelector('.current .temp');
// temp.innerHTML = '${Math.round(weather.main.temp)}<span>oC</span>';





var apiKey = '5f032585108c80fe6cb544e3869e6a7f';
var cityInput = $('#city');
var countryInput = $('#country');
var fetchButton = $('#fetch-button');

// var cityName = $('#chosen-city');

// cityInput = cityName;

// var todaysDate = $('#today');
// var forecastIcon = $('#icon');

// var statsContainer = $('#city-stats');


// Create a current date variable - or do I get this from openweathermap?
var dt = new Date();
document.getElementById('today').innerHTML = dt.toLocaleString();


// var todaysDate = new Date()
// var hours = todaysDate.getHours()
// var mins = todaysDate.getMinutes()
// var timeString = hours + ":" + mins

// var outputElement = document.getElementById("timePar")
// outputElement.textContent = timeString

// p.append(timeString);


// function getCurrentForecast() {
// CATCH-UP SESSION GUIDE:
var requestUrl = 'http://api.openweathermap.org/data/2.5/weather';
requestUrl += '?q={cityName}' + cityInput;
requestUrl += ',{countryCode}' + countryInput;
requestUrl += '&units=metric';
requestUrl += '&appid=' + apiKey;



// var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=cityInput,countryInput&units=metric&appid=5f032585108c80fe6cb544e3869e6a7f';


fetch(requestUrl)
  .then(response => response.json())
  .then(data => console.log(data));


// TA SESSION GUIDE:
// .then(function (data) {
//   console.log(data)
//   for (var i = 0; i < data.length; i++) {
//     var cityTemperature = $('#max-temperature');
//     var cityHumidity = $('#humidity');
//     var cityWindSpeed = $('#windspeed');
// var cityUvIndex = $('#uvindex');
// cityName.textContent = data[i].city.name;
// cityTemperature.textContent = data[i].main.temp_max; // convert to degrees C
// cityHumidity.textContent = data[i].main.humidity;
// cityWindSpeed.textContent = data[i].wind.speed; // convert to kmph
// cityUvIndex.textContent = data[i].xxx.uvi;
// h2.append(cityName);
// statsContainer.append(cityTemperature); // Parse 'Temperature: '+cityTemperature+' oC maximum'; inner html?
// statsContainer.append(cityHumidity); // Parse 'Humidity: '+cityHumidity+' %'; inner html?
// statsContainer.append(cityWindSpeed); // Parse 'Wind speed: '+cityWindSpeed+' kmph'; inner html?
// statsContainer.append(cityUvIndex); // Parse 'UV Index: '+cityUvIndex; inner html?
// console.log(data[i].city.name);
// console.log(data[i].main.temp_max); // convert to degrees C
// console.log(data[i].main.humidity);
// console.log(data[i].wind.speed); // convert to kmph
// console.log(data[i].xxx.uvi);
//   }
// });
// return renderCurrentForecast(data);
// } catch (function (err) {
//     console.log(err)
// }

// fetchButton.addEventListener('click', getCurrentForecast);

// function renderCurrentForecast() {
//   var date_value = "";
//   var temp = 0;
//   var dateArray = [];

//   for (let index = 0; index < data.list.length - 1; index++) {

//     var dateValue = new Date(data.list[index].dt_txt).toLocaleDateString();

//     if (!dateArray.includes(dateValue)) {
//       dateArray.push(dateValue);
//       date_value = data.list[index].dt_txt;
//       temp = data.list[index].main.temp_max;

//       console.log(temp)
//       console.log(dateValue)
//     }
//   }
// }



// function getForwardForecast() {
//   // fetch request gets a list of the 5-day weather stats for the chosen city
//   var cityName = $('#chosen-city');
//   var requestForwardForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q={cityInput,countryInput}&appid=5f032585108c80fe6cb544e3869e6a7f';

//   fetch(requestForwardForecastUrl)
//     .then(function (response) {
//       console.log(response)
//       return response.json();
//     })
//     .then(function (data) {
//       return renderAPI(data);
//     })
//     .catch(function (err) {
//       console.log(err)
//     })
// }

// function renderForwardForecast() {
// var cityTemperature = $('#max-temperature');
// var cityHumidity = $('#humidity');
// var cityWindSpeed = $('#windspeed');
// var cityUvIndex = $('#uvindex');


// var dateArray = [];
// var date_value = "";
// var icon = href;
// var temp_value = 0;
// var humidity_value = 0;
// var windspeed_value = 0;
// var uvIndex_value = 0;

// for (let index = 0; index < data.list.length -1; index++) {

// var dateValue = new Date(data.list[index].dt_txt).toLocaleDateString();

// if (!dateArray.includes(dateValue)) {
//   dateArray.push(dateValue);
//   date_value = data.list[index].dt_txt;
//   icon = data.list[index].weather.icon;
//   temp_value = data.list[index].main.temp_max;
//   humidity_value = data.list[index].main.humidity;
//   windspeed_value = data.list[index].wind.speed;
// uvIndex_value = data.list[index].wind.UV???;

//     console.log(temp)
//     console.log(dateValue)
//   }
// }



// fetchButton.addEventListener('click', getCurrentUrl);

// fetchButton.addEventListener('click', getForwardForecast);

function handleFormSubmit(event) {
  event.preventDefault();
}



// cityFormEl.on('submit', handleFormSubmit);


// https://school.geekwall.in/p/T8Bl4xyQ