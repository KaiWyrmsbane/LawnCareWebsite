//https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=1118s
const AppKey = "4c84b72661e14aa196e635179c13c3fd";
const AppUrl =
  "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=40165&country=us&days=7&units=I&lang=el";

async function CheckWeather() {
  const response = await fetch(AppUrl + `&key=${AppKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".dayOne").innerHTML =
    data.data[0].low_temp + "-" + data.data[0].high_temp;
  document.querySelector(".dayTwo").innerHTML =
    data.data[1].low_temp + "-" + data.data[1].high_temp;
  document.querySelector(".dayThree").innerHTML =
    data.data[2].low_temp + "-" + data.data[2].high_temp;
  document.querySelector(".dayFour").innerHTML =
    data.data[3].low_temp + "-" + data.data[3].high_temp;
  document.querySelector(".dayFive").innerHTML =
    data.data[4].low_temp + "-" + data.data[4].high_temp;
  document.querySelector(".daySix").innerHTML =
    data.data[5].low_temp + "-" + data.data[5].high_temp;
  document.querySelector(".daySeven").innerHTML =
    data.data[6].low_temp + "-" + data.data[6].high_temp;
}

CheckWeather();
