// GIVEN a weather dashboard with form inputs,
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// change made to test git push on 5-Apr


// CHOOSE CITY FROM FULL AVAILABLE LIST OF CITIES?

// var chosenCity = document.getElementById('form-city');
// var fetchButton = document.getElementById('fetch-button');


// function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    // var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  
    // var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid=5f032585108c80fe6cb544e3869e6a7f';

    // fetch(requestUrl)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        // for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
        //   var createTableRow = document.createElement('tr');
        //   var tableData = document.createElement('td');
        //   var link = document.createElement('a');
  
          // Setting the text of link and the href of the link
        //   link.textContent = data[i].html_url;
        //   link.href = data[i].html_url;
  
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
//         }
//       });
//   }
  
//   fetchButton.addEventListener('click', getApi);








// FETCH DATA ABOUT CHOSEN CITY:
var cityFormEl = $('#form-city')
var chooseACity = $('#city');
var fetchButton = $('#fetch-button');

var temperature
var humidity
var windSpeed
var uvIndex

function getApi() {
  // fetch request gets a list of the weather stats for the chosen city
  var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5f032585108c80fe6cb544e3869e6a7f';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        // var createTableRow = document.createElement('tr');
        // var tableData = document.createElement('td');
        // var link = document.createElement('a');


        // Setting the text of link and the href of the link
        // link.textContent = data[i].html_url;
        // link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
    //     tableData.appendChild(link);
    //     createTableRow.appendChild(tableData);
    //     tableBody.appendChild(createTableRow);
    //   }
    // });
}

fetchButton.addEventListener('click', getApi);

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();
}

cityFormEl.on('submit', handleFormSubmit);