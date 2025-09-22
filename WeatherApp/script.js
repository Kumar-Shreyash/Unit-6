const input = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
const display = document.getElementById("display");
const manualSearchDiv = document.getElementById("manual-search"); 

const API_KEY = "741bd4a1cddde67890715817ddc94f5a";

async function getWeatherByCoords(lat, lon) {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const res = await resp.json();
    displayData(res);
  } catch (error) {
    console.log(error.message);
  }
}

async function getWeatherByCity(city) {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const res = await resp.json();
    if (res.cod === 200) {
      displayData(res);
    } else {
      display.innerText = `❌ City not found: "${city}"`;
    }
  } catch (error) {
    display.innerText = `❌ Error fetching weather for "${city}"`;
  }
}

function displayData(data) {
  const { name, main, weather } = data;
  display.innerHTML = `
    <h2>${name}</h2>
    <p>🌡️ Temp: ${main.temp}°C</p>
    <p>☁️ Condition: ${weather[0].description}</p>
  `;
}

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        getWeatherByCoords(latitude, longitude);
      },
      () => {
        if (manualSearchDiv) manualSearchDiv.style.display = "block";
      }
    );
  } else {
    if (manualSearchDiv) manualSearchDiv.style.display = "block";
  }
};

searchBtn.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) {
    getWeatherByCity(city);
  }
});
