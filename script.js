
function getWeather() {
    const apiKey = 'd0815042648500b6aa9689f66a45a459';
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a valid city...');
        return;
    }
    const currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';

    fetch(currentWeatherUrl)
        .then(res => res.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data', error);
            alert('Error fetching weather data. Try again.');
        });
    fetch(forecastUrl)
        .then(res => res.json())
        .then(data => {
            displayHourlyForecast(data);
        })
        .catch(error => {
            console.error('Error fetching hourly weather data', error);
            alert('Error fetching hourly weather data. Try again.');
        });
}

function displayweather(data){
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIconDiv = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

weatherInfoDiv.innerHTML = '';
hourlyForecastDiv.innerHTML = '';
tempoDivInfo.innerHTML = '';

if (data.cod === '404') {
    weatherInfoDiv.innerHTML = '<p>$(data.message)</p>)'
} else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15)
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://api.openweathermap.org/img/${iconCode}.png`;
}
const temperatureHTML = '
    <p>${temperature}°C</p> ';
    const weatherHtml = `
    <p>${cityName}</p>
    <p>${description}</p> ';
    
tempDivInfo.innerHTML = TemperatureHTML;
weatherInfoDiv.innerHTML = weatherHtml;
weatherIconsrc = iconUrl;
weatherIcon.alt = description;
showImage();
}


