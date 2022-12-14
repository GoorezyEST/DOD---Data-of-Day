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

          const humIcon = document.querySelector(".hum-icon");
          const windIcon = document.querySelector(".wind-icon");

          const name = document.querySelector(".main__weather--main");
          const temp = document.querySelector(".main__weather__temp--temp");
          const icon = document.querySelector(".main__weather__temp--icon");
          const state = document.querySelector(".main__weather_s");
          const feel = document.querySelector(".main__weather_f");
          const hum = document.querySelector(".main__weather_h-text");
          const wind = document.querySelector(".main__weather-w-text");

          btnEs.addEventListener("click", function () {
            lang.classList.add("hide");
            name.innerHTML = `??C??mo esta el clima en ${data.name}?`;
            temp.innerHTML = `${Math.trunc(data.main.temp)}??C`;
            feel.innerHTML = `Sensaci??n t??rmica <span class="main__weather_f--feels">${Math.trunc(
              data.main.feels_like
            )}??C</span>`;
            hum.innerHTML = `Humedad <span class="main__weather_h--hum">${data.main.humidity}%</span>`;
            wind.innerHTML = `Viento a <span class="main__weather_w--wind">${Math.trunc(
              data.wind.speed * 3.6
            )} km/h</span>`;
            foot.innerHTML = `Desarrollado por <span class="main__weather__footer--dev">Goorezy</span>`;

            if (data.weather[0].description === "clear sky") {
              icon.innerHTML = `<img src="img/clear_sky.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="img/few_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="img/scattered_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="img/broken_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Rain") {
              console.log(data.weather[0].main);
              icon.innerHTML = `<img src="img/rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Thunderstorm") {
              icon.innerHTML = `<img src="img/thunderstorm.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Snow") {
              icon.innerHTML = `<img src="img/snow.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Mist") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Smoke") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Haze") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Dust") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Ash") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Squall") {
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
            } else if (data.weather[0].main === "Rain") {
              state.innerHTML = `Lluvia`;
            } else if (data.weather[0].main === "Thunderstorm") {
              state.innerHTML = `Tormeta`;
            } else if (data.weather[0].main === "Snow") {
              state.innerHTML = `Nieve`;
            } else if (data.weather[0].main === "Mist") {
              state.innerHTML = "Poca visibilidad";
            } else if (data.weather[0].main === "Smoke") {
              state.innerHTML = "Poca visibilidad";
            } else if (data.weather[0].main === "Haze") {
              state.innerHTML = "Poca visibilidad";
            } else if (data.weather[0].main === "Dust") {
              state.innerHTML = "Poca visibilidad";
            } else if (data.weather[0].main === "Ash") {
              state.innerHTML = "Poca visibilidad";
            } else if (data.weather[0].main === "Squall") {
              state.innerHTML = "Poca visibilidad";
            }

            themeBtn.addEventListener("click", function () {
              if (themeBtn.classList.contains("light")) {
                themeBtn.classList.remove("light");
                themeBtn.classList.add("dark");

                btnIcon.src = "img/theme_icon-dark.png";
                logo.src = "/img/DoD-Logo-Main-dark.svg";
                humIcon.src = "img/icon-hum-light.png";
                windIcon.src = "img/icon-wind-light.png";

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
                humIcon.src = "img/icon-hum-dark.png";
                windIcon.src = "img/icon-wind-dark.png";

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
            welc.innerHTML = `??Bienvenido a DOD!`;
            its.innerHTML = `Actualmente son las &darr;`;
          });

          btnEn.addEventListener("click", function () {
            lang.classList.add("hide");
            name.innerHTML = `??How's the weather at ${data.name}?`;
            temp.innerHTML = `${Math.trunc(data.main.temp + 32)}??F`;
            feel.innerHTML = `Feels like <span class="main__weather_f--feels">${Math.trunc(
              data.main.feels_like + 32
            )}??F</span>`;
            hum.innerHTML = `Humidity of <span class="main__weather_h--hum">${data.main.humidity}%</span>`;
            wind.innerHTML = `Wind at <span class="main__weather_w--wind">${Math.trunc(
              data.wind.speed * 2,
              237
            )} mph</span>`;
            foot.innerHTML = `Developed by <span class="main__weather__footer--dev">Goorezy</span>`;

            if (data.weather[0].description === "clear sky") {
              icon.innerHTML = `<img src="img/clear_sky.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "few clouds") {
              icon.innerHTML = `<img src="img/few_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "scattered clouds") {
              icon.innerHTML = `<img src="img/scattered_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "broken clouds") {
              icon.innerHTML = `<img src="img/broken_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].description === "overcast clouds") {
              icon.innerHTML = `<img src="img/broken_clouds.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Rain") {
              icon.innerHTML = `<img src="img/rain.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Thunderstorm") {
              icon.innerHTML = `<img src="img/thunderstorm.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Snow") {
              icon.innerHTML = `<img src="img/snow.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Mist") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Smoke") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Haze") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Dust") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Ash") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            } else if (data.weather[0].main === "Squall") {
              icon.innerHTML = `<img src="img/mist.png" alt="Weather icon" class="main__weather__temp--icon__pic">`;
            }

            if (data.weather[0].description === "clear sky") {
              state.innerHTML = `Clear sky`;
            } else if (data.weather[0].description === "few clouds") {
              state.innerHTML = `Few clouds`;
            } else if (data.weather[0].description === "scattered clouds") {
              state.innerHTML = `Scattered clouds`;
            } else if (data.weather[0].description === "broken clouds") {
              state.innerHTML = `Much clouds`;
            } else if (data.weather[0].description === "overcast clouds") {
              state.innerHTML = `Much clouds`;
            } else if (data.weather[0].main === "Rain") {
              state.innerHTML = `Rain`;
            } else if (data.weather[0].main === "Thunderstorm") {
              state.innerHTML = `Thunderstorm`;
            } else if (data.weather[0].main === "Snow") {
              state.innerHTML = `Snow`;
            } else if (data.weather[0].main === "Mist") {
              state.innerHTML = "Low visibility";
            } else if (data.weather[0].main === "Smoke") {
              state.innerHTML = "Low visibility";
            } else if (data.weather[0].main === "Haze") {
              state.innerHTML = "Low visibility";
            } else if (data.weather[0].main === "Dust") {
              state.innerHTML = "Low visibility";
            } else if (data.weather[0].main === "Ash") {
              state.innerHTML = "Low visibility";
            } else if (data.weather[0].main === "Squall") {
              state.innerHTML = "Low visibility";
            }

            themeBtn.addEventListener("click", function () {
              if (themeBtn.classList.contains("light")) {
                themeBtn.classList.remove("light");
                themeBtn.classList.add("dark");

                btnIcon.src = "img/theme_icon-dark.png";
                logo.src = "/img/DoD-Logo-Main-dark.svg";
                humIcon.src = "img/icon-hum-light.png";
                windIcon.src = "img/icon-wind-light.png";

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
                humIcon.src = "img/icon-hum-dark.png";
                windIcon.src = "img/icon-wind-dark.png";

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

            slogan.innerHTML = `All you have to know about today`;
            welc.innerHTML = `??Welcome to DOD!`;
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
