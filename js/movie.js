'use strict'

let allItem = [];

function Item(name, year, catagory, type, sourse) {

  this.name = name;
  this.year = year;
  this.catagory = catagory;
  this.type = type;
  this.sourse = sourse;


  allItem.push(this);

}

// Movie items

let item1 = new Item("john wick", 2018, "movie", "action", "image/wick.jpg");

let item2 = new Item("The equlizer", 2018, "movie", "action", "movies-Images/action the equalizer.jpg");

let item3 = new Item("Batman The Dark Night", 2018, "movie", "action", "movies-Images/action batman the dark night.png");

let item4 = new Item("Harry Potter", 2018, "movie", "drama", "movies-Images/action harry potter.jpg");

let item5 = new Item("Intersteller", 2018, "movie", "action", "movies-Images/sience intersteller.jpg");

let item6 = new Item("Enola Holmes", 2018, "movie", "drama", "movies-Images/drama enolla holmes.jpg");

let item7 = new Item("Fury", 2018, "movie", "action", "movies-Images/drama fury.jpg");

let item8 = new Item("Joker", 2018, "movie", "drama", "movies-Images/drama joker.jpg");

let item9 = new Item("Shools of rock", 2018, "movie", "comedy", "movies-Images/comedian schools of rock.jpg");


// anime Items

let item10 = new Item("Shingeki no Kyojin", 2013, "anime", "action", "https://cdn.myanimelist.net/images/anime/10/47347.webp");

let item11 = new Item("Sword Art Online", 2012, "anime", "action", "https://cdn.myanimelist.net/images/anime/11/39717.webp");

let item12 = new Item("One Punch Man", 2015, "anime", "action", "https://cdn.myanimelist.net/images/anime/12/76049.webp");

let item13 = new Item("Boku no Hero Academia", 2016, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/10/78745.webp");

let item14 = new Item("Fairy Tail", 2009, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/18179.webp");

let item15 = new Item("Ansatsu Kyoushitsu", 2015, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/75639.webp");

let item16 = new Item("Tokyo Ghoul", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/5/64449.webp");

let item17 = new Item("Angel Beats!", 2010, "anime", "drama", "https://cdn.myanimelist.net/images/anime/10/22061.webp");

let item18 = new Item("Haikyuu!!", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/7/76014.webp");


// sereis 

let item19 = new Item("The Walking Dead", 2010, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item20 = new Item("Jupiter's Legacy ", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let item21 = new Item("Them", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let item22 = new Item("Game of Thrones", 2011, "series", "action", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg");

let item23 = new Item("Vikings", 2013, "series", "action", "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item24 = new Item("Money Heist", 2017, "series", "action", "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item25 = new Item("Friends", 1994, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg");

let item26 = new Item("Schitt's Creek ", 2015, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item27 = new Item("The Big Bang Theory ", 2007, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX182_CR0,0,182,268_AL_.jpg");


// console.log(allItem);
// let moviesArray = [];
// let seriesArray = [];
// let animeArray = [] ; 
// for (let i = 0; i < allItem.length; i++) {
//   if (allItem[i].catagory === 'movie') {
//     moviesArray.push(allItem[i])
    
//   }else if (allItem[i].catagory === 'series') {
//     seriesArray.push(allItem[i])
//   }else if (allItem[i].catagory === 'anime') {
//     animeArray.push(allItem[i])
//   }
// }

// console.log(moviesArray);
// console.log(seriesArray);
// console.log(animeArray);




let displayMovies = document.getElementById('movies');
let displaySeries = document.getElementById('series');
let displayAnimes = document.getElementById('anime');




function renderMovies() {


  for (let i = 0; i < allItem.length; i++) {

    if (displayMovies !==null) {
      
      if (allItem[i].catagory === "movie") {
  
        let box = document.createElement('div');
        displayMovies.appendChild(box);
  
        let image = document.createElement('img');
        box.appendChild(image);
        image.style.height = "100px";
        image.style.width = "100px";
        let myP = document.createElement('p');
        box.appendChild(myP);
  
  
  
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);
  
  
        image.src = allItem[i].sourse;
      }
    }
  }
 
 renderMovies();



function renderSeries() {

  for (let i = 0; i < allItem.length; i++) {
    if (displaySeries!==null) {
      
      if (allItem[i].catagory === "series") {
  
        let box = document.createElement('div');
        displaySeries.appendChild(box);
  
        let image = document.createElement('img');
        box.appendChild(image);
        image.style.height = "100px";
        image.style.width = "100px";
  
        let myP = document.createElement('p');
        box.appendChild(myP);
  
  
  
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);
  
  
        image.src = allItem[i].sourse;
  
      }
    }



  }

}

renderSeries();


function renderAnime() {
  for (let i = 0; i < allItem.length; i++) {
    if (displayAnimes!==null) {
      
      if (allItem[i].catagory === "anime") {
  
        let box = document.createElement('div');
        displayAnimes.appendChild(box);
  
        let image = document.createElement('img');
        box.appendChild(image);
        image.style.height = "100px";
        image.style.width = "100px";
  
        let myP = document.createElement('p');
        box.appendChild(myP);
  
  
  
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);
  
  
        image.src = allItem[i].sourse;
  
      }
    }



  }
  
}
renderAnime()

