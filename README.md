# Server-Side APIs: Weather Dashboard

## Dashboard

This weather dashboard will run in the browser and feature dynamically updated HTML and CSS.  It will access a third party API [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for chosen cities and `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Application

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Deployment: 32%

* Application deployed at live URL:

    https://rachel-brain.github.io/weather-dashboard/

* Application GitHub URL including GitHub repository containing application code:

    https://github.com/rachel-brain/weather-dashboard