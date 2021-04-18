'use strict'

let allItem = [];

function Item(name, year, type, movieType, sourse) {

  this.name = name;
  this.year = year;
  this.type = type;
  this.movieType = movieType;
  this.sourse = sourse;


  allItem.push(this);

}


let item1 = new Item("john wick", 2018, "movie", "drama", "image/wick.jpg");
let item2 = new Item("john wick", 2018, "anime", "action", "https://memberpress.com/wp-content/uploads/2020/05/act-now-button-concept-3d-illustration-picture-id1000849426.jpg");
let item3 = new Item("john wick", 2018, "anime", " action", "https://st2.depositphotos.com/1498528/9192/v/950/depositphotos_91922214-stock-illustration-action-word-icon.jpg");
let item4 = new Item("john wick", 2018, "series", "comedy", "https://media.gettyimages.com/photos/keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-on-picture-id1146739180?s=612x612");


console.log(allItem);


let display = document.getElementById('movies-display');

function render() {

  for (let i = 0; i < allItem.length; i++) {

    let box = document.createElement('div');
    display.appendChild(box);

    let image = document.createElement('img');
    box.appendChild(image);
    image.style.height = "100px";
    image.style.width = "100px";

    let myP = document.createElement('p');
    box.appendChild(myP);

    myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].name}`);


    image.src = allItem[i].sourse;



  }

}

render();


let comedy = document.getElementById('comedy');

comedy.addEventListener('click', comedyClick);


function comedyClick() {

  display.textContent = ''
  
  for (let i = 0; i < allItem.length; i++) {
    if (allItem[i].movieType == "comedy") {
      let box = document.createElement('div');
      display.appendChild(box);



      let image = document.createElement('img');
      box.appendChild(image);
      image.style.height = "100px";
      image.style.width = "100px";

      let myP = document.createElement('p');
      box.appendChild(myP);

      myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].name}`);


      image.src = allItem[i].sourse;

    }


    // for(let j = 0 ; j<allItem ; j++){

    //     if(allItem[j].movieType.includes("action") || allItem[j].movieType.includes("drama")){

    //         allItem[j].pop();


    //     }


    // }




  }

}


  let action = document.getElementById('action');

  action.addEventListener('click', actionClick);


  function actionClick() {

    display.textContent = ''
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].movieType == "action") {
        let box = document.createElement('div');
        display.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        image.style.height = "100px";
        image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].name}`);


        image.src = allItem[i].sourse;

      }






    }


  }
