document.addEventListener('DOMContentLoaded', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = 'YOUR_API_KEY';  // Substitua pelo seu API Key do OpenWeatherMap
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          document.getElementById('location').textContent = data.name;
          document.getElementById('temperature').textContent = `${data.main.temp} °C`;
          document.getElementById('description').textContent = data.weather[0].description;
        })
        .catch(error => {
          console.error('Error fetching the weather data:', error);
          document.getElementById('weather').textContent = 'Could not retrieve weather data.';
        });
    });
  } else {
    document.getElementById('weather').textContent = 'Geolocation not supported by this browser.';
  }
});
