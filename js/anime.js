
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



let item1 = new Item("Shingeki no Kyojin", 2013, "anime", "action", "https://cdn.myanimelist.net/images/anime/10/47347.webp");

let item2 = new Item("Sword Art Online", 2012, "anime", "action", "https://cdn.myanimelist.net/images/anime/11/39717.webp");

let item3 = new Item("One Punch Man", 2015, "anime", "action", "https://cdn.myanimelist.net/images/anime/12/76049.webp");

let item4 = new Item("Boku no Hero Academia", 2016, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/10/78745.webp");

let item5 = new Item("Fairy Tail", 2009, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/18179.webp");

let item6 = new Item("Ansatsu Kyoushitsu", 2015, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/75639.webp");

let item7 = new Item("Tokyo Ghoul", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/5/64449.webp");

let item8 = new Item("Angel Beats!", 2010, "anime", "drama", "https://cdn.myanimelist.net/images/anime/10/22061.webp");

let item9 = new Item("Haikyuu!!", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/7/76014.webp");


console.log(allItem);

// if 
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
