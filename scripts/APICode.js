//https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=1118s
const AppKey = "4c84b72661e14aa196e635179c13c3fd";
const AppUrl = "https://api.weatherbit.io/v2.0/current?postal_code=40165";

async function CheckWeather() {
  const responce = await fetch(AppUrl + `&key=${AppKey}`);
  var data = await responce.json();

  console.log(data);
  document.querySelector(".cityname").innerHTML = data.data[0].city_name;
  document.querySelector(".temp").innerHTML = data.data[0].app_temp;
}

CheckWeather();
