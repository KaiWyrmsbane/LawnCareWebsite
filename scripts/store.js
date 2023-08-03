//create an array of 10 lawnmowers
let mowers = [
  {
    Brand: "Cub Cadet",
    type: "Riding Mower",
    cost: "$900,00",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
    cost: "$680,00",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
    cost: "$567.99",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
    cost: "$675.99",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
    cost: "$599.00",
  },
  {
    Brand: "Troy Bilt",
    type: "Riding Mower",
    cost: "$650.00",
  },
  {
    Brand: "Scag",
    type: "Zero-Turn Mower",
    cost: "$2,000.00",
  },
  {
    Brand: "Craftsman",
    type: "Push Mower",
    cost: "$159.99",
  },
  {
    Brand: "Craftsman",
    type: "Zero-Turn Mower",
    cost: "$435.99",
  },
  {
    Brand: "Craftsman",
    type: "Riding Mower",
    cost: "$400.00",
  },
];

buildTable(mowers);

function buildTable(data) {
  const table = document.getElementById("mowers");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
        <td>${data[i].Brand}</td>
        <td>${data[i].type}</td>
        <td>${data[i].cost}</td>
      </tr>`;

    table.innerHTML += row;
  }
}

//use this funtion to filtrate the Array of lawnmowers
FilterObjects("all");

function FilterObjects(c) {
  let x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
