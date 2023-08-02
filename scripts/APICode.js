request
  .get("https://api.weatherbit.io/v2.0/subscription/usage?key=API_KEY", {
    method: "post",
    headers: {
      key: APIKey,
    },
  })
  .then((response) => {
    // Do something with the response here
    console.log(response);
  })
  .catch((error) => console.log(error));

apiRouter.get("/forecast", (req, res, next) => {});
