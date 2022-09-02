const clock = function () {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  const time = `${h}:${m}:${s}`;
  document.querySelector(".main__clock__time").innerHTML = time;
  setTimeout(clock, 1000);
};

function success(pos) {
  let crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude;

  console.log(lat, lon);

  const weather = async function () {
    try {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a3dcc88790aac72ff590d56c8ca65ff&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          const lang = document.querySelector(".language");
          const btnEs = document.querySelector(".language__btns--es");
          const btnEn = document.querySelector(".language__btns--en");

          const slogan = document.querySelector(
            ".main__header__text__main--info"
          );
          const welc = document.querySelector(".main__clock__text--title");
          const its = document.querySelector(".main__clock__text--info");
          const foot = document.querySelector(".main__weather__footer");

          const name = document.querySelector(".main__weather--main");
          const temp = document.querySelector(".main__weather__temp--temp");
          const icon = document.querySelector(".main__weather__temp--icon");
          const feel = document.querySelector(".main__weather_f");
          const hum = document.querySelector(".main__weather_h");

          btnEs.addEventListener("click", function () {
            lang.classList.add("hide");
            name.innerHTML = `¿Cómo esta el clima en ${data.name}?`;
            temp.innerHTML = `${data.main.temp}°C`;
            feel.innerHTML = `Sensación térmica <span class="main__weather_f--feels">${data.main.feels_like}°C</span>`;
            hum.innerHTML = `Humedad <span class="main__weather_h--hum">${data.main.humidity}%</span>`;
            foot.innerHTML = `Desarrollado por <span class="main__weather__footer--dev">Goorezy</span>`;

            if (data.weather[0].description === "clear sky") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/04d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "shower rain") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/09d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "rain") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "thunderstorm") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "snow") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/13d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "mist") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/50d@2x.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            }

            slogan.innerHTML = `Todo lo que necesitas saber del dia`;
            welc.innerHTML = `¡Bienvenido a DOD!`;
            its.innerHTML = `Actualmente son las &darr;`;
          });

          btnEn.addEventListener("click", function () {
            lang.classList.add("hide");
            name.innerHTML = `¿How's the weather at ${data.name}?`;
            temp.innerHTML = `${data.main.temp}°C`;
            feel.innerHTML = `Feels like <span class="main__weather_f--feels">${data.main.feels_like}°C</span>`;
            hum.innerHTML = `Humidity of <span class="main__weather_h--hum">${data.main.humidity}%</span>`;
            foot.innerHTML = `Developed by <span class="main__weather__footer--dev">Goorezy</span>`;

            if (data.weather[0].description === "clear sky") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/04d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "shower rain") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/09d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "rain") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "thunderstorm") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/11d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "snow") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/13d@2x.png" alt="Weather icon">`;
            } else if (data.weather[0].description === "mist") {
              icon.innerHTML = `<img src="https://openweathermap.org/img/wn/50d@2x.png" alt="Weather icon">`;
            }

            slogan.innerHTML = `All you have to know about today`;
            welc.innerHTML = `¡Welcome to DOD!`;
            its.innerHTML = `It's currently &darr;`;
          });
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  weather();
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
  alert("You must allow us to access the location");
}

const getPosition = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

clock();
getPosition();
