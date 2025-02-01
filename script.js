async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e32d58c40a6de03040d48bd08ae8494e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherOutput').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherOutput = document.getElementById('weatherOutput');
    const { date,name, main, weather } = data;
    weatherOutput.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
}
