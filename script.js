async function getWeather() {
    const apiKey = '3b162af465f3a65d5ef19026f086d285'; // Reemplaza con tu clave de API de OpenWeather
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found. Please enter a valid city name.');
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                             <p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>`;
}
