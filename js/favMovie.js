'use strict';

// get the data from local storage and

// function getStore() {
//     // for (let i = 0; i < localStorage.length; i++) {
//     //     const element = array[i];

//     // }
//     let callObjects = localStorage.getItem('favourites');

//     let displayOb= JSON.parse(callObjects);
//     console.log(displayOb);

//   }

let div = document.getElementById('s');

let allObject = [];

function getStore() {
  let callObjects = localStorage.getItem('favourites');

  let displayOb = JSON.parse(callObjects);
  console.log(displayOb);

  for (let i = 0; i < displayOb.length; i++) {
    allObject.push(displayOb[i])

  }


  console.log(allObject);



  // if (displayOb !== null) {
  //   Item.allItem = displayOb    
  // }

  for (let i = 0; i < displayOb.length; i++) {
    console.log(displayOb[i].name);
    // new Item (displayOb[i].name,displayOb[i].year,displayOb[i].catagory,displayOb[i].type,displayOb[i].sourse)



    let innerDiv = document.createElement('div');
    div.appendChild(innerDiv);
    innerDiv.className = 'box';


    let pa = document.createElement('p');
    innerDiv.appendChild(pa);
    pa.textContent = displayOb[i].name;

    let type = document.createElement('p');
    innerDiv.appendChild(type);
    type.textContent = displayOb[i].type;

    let img = document.createElement('img');
    innerDiv.appendChild(img);
    img.src = displayOb[i].sourse;



  }

}

getStore()


let button = document.createElement('button');



