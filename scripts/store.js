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
