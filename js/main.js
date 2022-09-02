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
          const logo = document.querySelector(".main__header__text--img");
          const its = document.querySelector(".main__clock__text--info");
          const foot = document.querySelector(".main__weather__footer");

          const themeBtn = document.querySelector(".main__weather--btn");
          const btnIcon = document.querySelector(".main__weather--btn__icon");

          const name = document.querySelector(".main__weather--main");
          const temp = document.querySelector(".main__weather__temp--temp");
          const icon = document.querySelector(".main__weather__temp--icon");
          const state = document.querySelector(".main__weather_s");
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
              icon.innerHTML = `<img src="img/clear_sky.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="img/few_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="img/scattered_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="img/broken_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "shower rain") {
              icon.innerHTML = `<img src="img/shower_rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "rain") {
              icon.innerHTML = `<img src="img/rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "thunderstorm") {
              icon.innerHTML = `<img src="img/thunderstorm.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "snow") {
              icon.innerHTML = `<img src="img/snow.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "mist") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            }

            if (data.weather[0].description === "clear sky") {
              state.innerHTML = `Cielo despejado`;
            } else if (data.weather[0].description === "few clouds") {
              state.innerHTML = `Pocas nubes`;
            } else if (data.weather[0].description === "scattered clouds") {
              state.innerHTML = `Nubes dispersas`;
            } else if (data.weather[0].description === "broken clouds") {
              state.innerHTML = `Muchas nubes`;
            } else if (data.weather[0].description === "shower rain") {
              state.innerHTML = `Lluvia fuerte`;
            } else if (data.weather[0].description === "rain") {
              state.innerHTML = `Lluvia`;
            } else if (data.weather[0].description === "thunderstorm") {
              state.innerHTML = `Tormeta`;
            } else if (data.weather[0].description === "snow") {
              state.innerHTML = `Nieve`;
            } else if (data.weather[0].description === "mist") {
              state.innerHTML = `Niebla`;
            }

            themeBtn.addEventListener("click", function () {
              if (themeBtn.classList.contains("light")) {
                themeBtn.classList.remove("light");
                themeBtn.classList.add("dark");

                btnIcon.src = "img/theme_icon-dark.png";
                logo.src = "/img/DoD-Logo-Main-dark.svg";

                document.documentElement.style.setProperty("--text", "#e0e0e0");
                document.documentElement.style.setProperty(
                  "--text-sec",
                  "#eeeeeebe"
                );
                document.documentElement.style.setProperty(
                  "--line",
                  "#e9e9e952"
                );
                document.documentElement.style.setProperty("--main", "#3a3a3a");
                document.documentElement.style.setProperty(
                  "--background",
                  "#292929"
                );
              } else if (themeBtn.classList.contains("dark")) {
                themeBtn.classList.remove("dark");
                themeBtn.classList.add("light");

                btnIcon.src = "img/theme_icon-light.png";
                logo.src = "/img/DoD-Logo-Main-light.svg";

                document.documentElement.style.setProperty("--text", "#2e2e2e");
                document.documentElement.style.setProperty(
                  "--text-sec",
                  "#2e2e2ebe"
                );
                document.documentElement.style.setProperty(
                  "--line",
                  "#2e2e2e52"
                );
                document.documentElement.style.setProperty("--main", "#f3f3f3");
                document.documentElement.style.setProperty(
                  "--background",
                  "#e0e0e0"
                );
              }
            });

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
              icon.innerHTML = `<img src="img/clear_sky.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="img/few_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="img/scattered_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="img/broken_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "shower rain") {
              icon.innerHTML = `<img src="img/shower_rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "rain") {
              icon.innerHTML = `<img src="img/rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "thunderstorm") {
              icon.innerHTML = `<img src="img/thunderstorm.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "snow") {
              icon.innerHTML = `<img src="img/snow.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "mist") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            }

            if (data.weather[0].description === "clear sky") {
              state.innerHTML = `Clear sky`;
            } else if (data.weather[0].description === "few clouds") {
              state.innerHTML = `Few clouds`;
            } else if (data.weather[0].description === "scattered clouds") {
              state.innerHTML = `Scattered clouds`;
            } else if (data.weather[0].description === "broken clouds") {
              state.innerHTML = `Broken clouds`;
            } else if (data.weather[0].description === "shower rain") {
              state.innerHTML = `Shower rain`;
            } else if (data.weather[0].description === "rain") {
              state.innerHTML = `Rain`;
            } else if (data.weather[0].description === "thunderstorm") {
              state.innerHTML = `Thunderstorm`;
            } else if (data.weather[0].description === "snow") {
              state.innerHTML = `Snow`;
            } else if (data.weather[0].description === "mist") {
              state.innerHTML = `Mist`;
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
