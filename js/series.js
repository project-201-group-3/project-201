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


let item1 = new Item("The Walking Dead", 2010, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item2 = new Item("Jupiter's Legacy ", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let item3 = new Item("Them", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let item4 = new Item("Game of Thrones", 2011, "series", "action", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg");

let item5 = new Item("Vikings", 2013, "series", "action", "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item6 = new Item("Money Heist", 2017, "series", "action", "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item7 = new Item("Friends", 1994, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg");

let item8 = new Item("Schitt's Creek ", 2015, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item9 = new Item("The Big Bang Theory ", 2007, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX182_CR0,0,182,268_AL_.jpg");


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
