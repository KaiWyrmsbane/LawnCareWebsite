//https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=1118s
const AppKey = "4c84b72661e14aa196e635179c13c3fd";
//this will give me a 7 day forecast in shepherdsville, ky
const AppUrl =
  "https://api.weatherbit.io/v2.0/current?postal_code=40165&country=us&units=I&lang=el";

//checkweather will display the 7 day weather forecast
async function CheckWeather() {
  const response = await fetch(AppUrl + `&key=${AppKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".cityname").innerHTML = data.data[0].city_name;
  document.querySelector(".temp").innerHTML = data.data[0].app_temp;
}

CheckWeather();
