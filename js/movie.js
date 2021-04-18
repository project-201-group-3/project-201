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


let item1 = new Item("john wick", 2018, "movie", "action", "image/wick.jpg");

let item2 = new Item("The equlizer", 2018, "anime", "action", "movies-Images/action the equalizer.jpg");

let item3 = new Item("Batman The Dark Night", 2018, "anime", "action", "movies-Images/action batman the dark night.png");

let item4 = new Item("Harry Potter", 2018, "series", "drama", "movies-Images/action harry potter.jpg");

let item5 = new Item("Intersteller", 2018, "movie", "action", "movies-Images/sience intersteller.jpg");

let item6 = new Item("Enola Holmes", 2018, "anime", "drama", "movies-Images/drama enolla holmes.jpg");

let item7 = new Item("Fury", 2018, "anime", "action", "movies-Images/drama fury.jpg");

let item8 = new Item("Joker", 2018, "series", "drama", "movies-Images/drama joker.jpg");

let item9 = new Item("Shools of rock", 2018, "series", "comedy", "movies-Images/comedian schools of rock.jpg");


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

    myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].movieType}`);


    image.src = allItem[i].sourse;



  }

}

render();



// events 

let allDisplay = document.getElementById('all');

allDisplay.addEventListener('click', allClick);

function allClick() {
  display.textContent = ''
  render();
  
}

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

      myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].movieType}`);


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

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].movieType}`);


        image.src = allItem[i].sourse;
       

      }

    }

  }

  
  let drama = document.getElementById('drama');

  drama.addEventListener('click', dramaClick);


  function dramaClick() {

    display.textContent = ''
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].movieType == "drama") {
        let box = document.createElement('div');
        display.appendChild(box);

        



        let image = document.createElement('img');
        box.appendChild(image);
        image.style.height = "100px";
        image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].movieType}`);


        image.src = allItem[i].sourse;
       

      }

    }

  }
