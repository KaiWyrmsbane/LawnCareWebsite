fetch("https://api.weatherbit.io/v2.0/current", {
  method: "post",
  headers: {
    Authorization:
      "Basic " + btoa("kaiWyrmsbane:4c84b72661e14aa196e635179c13c3fd"),
  },
})
  .then((response) => {
    // Do something with the response here
    console.log(response);
  })
  .catch((error) => console.log(error));
