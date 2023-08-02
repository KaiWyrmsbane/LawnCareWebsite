//create an array of 10 lawnmowers
let mowers = [
  {
    Brand: "Cub Cadet",
    type: "Riding Mower",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
  },
  {
    Brand: "Scag",
    type: "Zero-Turn Mower",
  },
  {
    Brand: "Craftsman",
    type: "Push Mower",
  },
  {
    Brand: "Craftsman",
    type: "Zero-Turn Mower",
  },
  {
    Brand: "Craftsman",
    type: "Riding Mower",
  },
];

buildTable(mowers);

function buildTable(data) {
  const table = document.getElementById("mowers");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
        <td>${data[i].Brand}</td>
        <td>${data[i].type}</td>
      </tr>`;

    table.innerHTML += row;
  }
}

//use this funtion to filtrate the Array of lawnmowers
function filterTable(brand, type) {
  if (brand == "Scag") {
    console.log(mowers[6].Brand);
  }
}
