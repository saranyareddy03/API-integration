const API_KEY="ede7a7b956e439539dcdf0d1cbba1dff";
const BASE_URL="https://api.openweathermap.org/data/2.5/weather";
function getWeather() {
    const city=document.getElementById('cityInput').value;
    const url=${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric;
    fetch(url)
        .then(response=>response.json())
        .then(data=>displayWeather(data))
        .catch(error=>console.error('Error fetching weather data:',error));
}
function displayWeather(data) {
    if (data) {
        document.getElementById('city').textContent=City: ${data.name};
        document.getElementById('temperature').textContent=Temperature: ${data.main.temp}°C;
        document.getElementById('humidity').textContent=Humidity: ${data.main.humidity}%;
    } else {
        document.getElementById('city').textContent="City: Not found";
        document.getElementById('temperature').textContent="Temperature: N/A";
        document.getElementById('humidity').textContent="Humidity: N/A";
    }
}