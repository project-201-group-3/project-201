'use strict'

// getting favourite form local storage
function getData() {
  let stringOb=localStorage.getItem('favourites');
  let normalOb=JSON.parse(stringOb);
  if (normalOb) {
    added=normalOb;
    // for (let i = 0; i < normalOb.length; i++) {
      console.log('inside get data',normalOb);
      // new Item(normalOb[i].name,normalOb[i].year,normalOb[i].catagory,normalOb[i].type,normalOb[i].sourse);
      
    // }
  }
}


// constructor

let allItem = [];
function Item(name, year, catagory, type, sourse) {
  this.name = name;
  this.year = year;
  this.catagory = catagory;
  this.type = type;
  this.sourse = sourse;  
  if (this.catagory === "movie") {
    this.renderMovies();
  } else if (this.catagory === "anime") {
    this.renderAnime();
  } else if (this.catagory === "series") {
    this.renderSeries();
  } 
  allItem.push(this);
}



let added = []


// Prototype to render all movies

Item.prototype.renderMovies = function () {

  if (displayMovies !== null) {
    let box = document.createElement('div');
    displayMovies.appendChild(box);
    let image = document.createElement('img');
    box.appendChild(image);
    let myP = document.createElement('p');
    box.appendChild(myP);
    myP.classList.add('myP');
    let typeP = document.createElement('p');
    box.appendChild(typeP);
    let button = document.createElement('a')
    button.classList.add('addFav');
    box.appendChild(button)
    button.addEventListener('click', submitter);
    button.textContent = '♡';
    let object = this;
    function submitter() {
    if(added.includes(object)== false){
    button.textContent = '❤️'; //to store locally
    added.push(object);
    console.log(added);
    store();
    }}
    myP.innerHTML = (`${this.name} ${this.year} `);
    typeP.innerHTML = (` \n ${this.type}`);
    image.src = this.sourse;
  }
}


// Prototype to render all series

Item.prototype.renderSeries = function () {

  if (displaySeries !== null) {
    let box = document.createElement('div');
    displaySeries.appendChild(box);
    let image = document.createElement('img');
    box.appendChild(image);
    let myP = document.createElement('p');
    box.appendChild(myP);
    myP.classList.add('myP');
    let typeP = document.createElement('p');
    box.appendChild(typeP);
    let button = document.createElement('a');
    button.classList.add('addFav');
    box.appendChild(button)
    button.addEventListener('click', submitter);
    button.textContent = '♡';
    let object = this;
    function submitter() {
      if(added.includes(object)== false){
        added.push(object);
        button.textContent = '❤️'; 
        console.log(added);
        store();
      }
    }
    myP.innerHTML = (`${this.name} ${this.year} `);
    typeP.innerHTML = (` \n ${this.type}`);
    image.src = this.sourse;
  }
}

// Prototype to render all anime

Item.prototype.renderAnime = function () {

  if (displayAnimes !== null) {
    let box = document.createElement('div');
    displayAnimes.appendChild(box);
    let image = document.createElement('img');
    box.appendChild(image);
    let myP = document.createElement('p');
    box.appendChild(myP);
    myP.classList.add('myP');
    let typeP = document.createElement('p');
    box.appendChild(typeP);
    let button = document.createElement('a')
    box.appendChild(button);
    button.classList.add('addFav');
    button.addEventListener('click', submitter);
    button.textContent = '♡';
    let object = this;
    function submitter() {
      if(added.includes(object)== false){
        button.textContent = '❤️'; 
        added.push(object);
        console.log(added);
        store();
      }
    }
    myP.innerHTML = (`${this.name} ${this.year} `);
    typeP.innerHTML = (` \n ${this.type}`);
    image.src = this.sourse;
  }
}


let displayMovies = document.getElementById('movies');
let displaySeries = document.getElementById('series');
let displayAnimes = document.getElementById('anime');


// Using local storge for favorite

function store() {
  let stringOb = JSON.stringify(added);
  localStorage.setItem('favourites', stringOb)
  // console.log(stringOb);
}


// Events for the sorting  


// 1) To display all movies or anime or series


let allDisplay = document.getElementById('all');
if (allDisplay!= null){
allDisplay.addEventListener('click', allClick);}
function allClick() {
  getData();

  if (displayMovies !== null) {

    displayMovies.textContent = ''

  }else if (displaySeries !== null) {

    displaySeries.textContent = ''

  }else if (displayAnimes !== null) {

    displayAnimes.textContent = ''

  }
    for (let i = 0; i < allItem.length; i++) {      
      if (allItem[i].catagory === "movie" &&displayMovies !== null) {
        console.log('inside render all',allItem);
        allItem[i].renderMovies();
      }else if (allItem[i].catagory === "series" && displaySeries !== null) {
        allItem[i].renderSeries();
      }else if (allItem[i].catagory === "anime" && displayAnimes !== null) {
        allItem[i].renderAnime();
      }
    }
}


// 2) To sort it by Comedy
let comedy = document.getElementById('comedy');
if (comedy!= null){

comedy.addEventListener('click', comedyClick);}
function comedyClick() {
  getData()
  if (displayMovies !== null) {
    displayMovies.textContent = ''
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "comedy" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;
      } 
    }

  } else if (displaySeries !== null) {

    displaySeries.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "comedy" && allItem[i].catagory == "series") {
        let box = document.createElement('div');
        displaySeries.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  } else if (displayAnimes !== null) {

    displayAnimes.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "comedy" && allItem[i].catagory == "anime") {
        let box = document.createElement('div');
        displayAnimes.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);

        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);

        image.src = allItem[i].sourse;

      }


    }
  }


}


//  3) To sort it by Action
let action = document.getElementById('action');
if (action!= null){

action.addEventListener('click', actionClick);
}
function actionClick() {
  getData()

  if (displayMovies !== null) {

    displayMovies.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "action" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  } else if (displaySeries !== null) {

    displaySeries.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "action" && allItem[i].catagory == "series") {
        let box = document.createElement('div');
        displaySeries.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  } else if (displayAnimes !== null) {

    displayAnimes.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "action" && allItem[i].catagory == "anime") {
        let box = document.createElement('div');
        displayAnimes.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);

        image.src = allItem[i].sourse;

      }


    }
  }



}
// 4) To sort by Daram

let drama = document.getElementById('drama');
if (drama!= null){

drama.addEventListener('click', dramaClick);
}
function dramaClick() {
  getData()

  if (displayMovies !== null) {

    displayMovies.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "drama" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  } else if (displaySeries !== null) {

    displaySeries.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "drama" && allItem[i].catagory == "series") {
        let box = document.createElement('div');
        displaySeries.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  } else if (displayAnimes !== null) {

    displayAnimes.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "drama" && allItem[i].catagory == "anime") {
        let box = document.createElement('div');
        displayAnimes.appendChild(box);
        let image = document.createElement('img');
        box.appendChild(image);
        let myP = document.createElement('p');
        box.appendChild(myP);
        myP.classList.add('myP');
        let typeP = document.createElement('p');
         box.appendChild(typeP);
        let button = document.createElement('a')
        box.appendChild(button)
        button.addEventListener('click', submitter);
        button.classList.add('addFav');
        button.textContent = '♡';
        function submitter() {
          button.textContent = '❤️';
          if(added.includes(allItem[i])== false){
        added.push(allItem[i]);
          console.log('lines',added);
          store()
        }}
        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year}`);
        typeP.innerHTML = (` \n ${allItem[i].type}`);
        image.src = allItem[i].sourse;

      }


    }
  }
}


// to render movie or anime or series by the user  
function getForm() {
    // get the data from the local storage
    let data = localStorage.getItem('product');
    console.log(data);
    //convert data back into a normal array of objects
    let productData = JSON.parse(data);
    if (productData) {
      
      for(let i = 0 ; i<productData.length ; i++){
       allItem.push(productData[i]);
       new Item (productData[i].name,productData[i].year,productData[i].catagory,productData[i].type,productData[i].sourse);
      }
    }
    }  
  getForm();


// Movie items

let item1 = new Item("john wick", 2018, "movie", "action", "image/wick.jpg");

let item2 = new Item("The equlizer", 2018, "movie", "action", "movies-Images/action the equalizer.jpg");

let item3 = new Item("Batman the dark night", 2018, "movie", "action", "movies-Images/action batman the dark night.png");

let item4 = new Item("Harry Potter", 2018, "movie", "drama", "movies-Images/action harry potter.jpg");

let item5 = new Item("Intersteller", 2018, "movie", "action", "movies-Images/sience intersteller.jpg");

let item6 = new Item("Enola Holmes", 2018, "movie", "drama", "movies-Images/drama enolla holmes.jpg");

let item7 = new Item("Fury", 2018, "movie", "action", "movies-Images/drama fury.jpg");

let item8 = new Item("Joker", 2018, "movie", "drama", "movies-Images/drama joker.jpg");

let item9 = new Item("Shools of rock", 2018, "movie", "comedy", "movies-Images/comedian schools of rock.jpg");

let item10 = new Item("Murder Mystery", 2019, "movie", "comedy", "https://upload.wikimedia.org/wikipedia/en/1/19/Murder_Mystery_%28film%29.png");

let item11 = new Item("Shazam!", 2019, "movie", "comedy", "https://www.twilight-zone.nl/WebRoot/Pins/Shops/Twilightzone/5DE8/E6F3/DCD4/0E4C/BAFD/0A0C/05BA/7B31/P1SMMSZ01_0.jpg");

let item12 = new Item("The Hangover", 2009, "movie", "comedy", "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg");

let item13 = new Item("The Dictator", 2012, "movie", "comedy", "https://static.timesofisrael.com/www/uploads/2012/05/Dictator_Quad-1024x768.jpg");

let item14 = new Item("The Hustle", 2019, "movie", "comedy", "https://images-na.ssl-images-amazon.com/images/I/814JCBZ9uaL._SL1500_.jpg");

let item15 = new Item("The Irishman", 2019, "movie", "drama", "https://upload.wikimedia.org/wikipedia/en/8/80/The_Irishman_poster.jpg");

let item16 = new Item("Fences", 2016, "movie", "drama", "https://images-na.ssl-images-amazon.com/images/I/91rlSZKayHL._SY445_.jpg");

let item17 = new Item("The Judge", 2014, "movie", "drama", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9224/9224007_so.jpg");

let item18 = new Item("Dunkirk", 2017, "movie", "action", "https://media.newyorker.com/photos/59779db5c100c36587d57458/16:9/w_4002,h_2251,c_limit/Brody-Dunkirk.JPG");

let item19 = new Item("Ford v Ferrari", 2019, "movie", "drama", "https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png");

let item20 = new Item("Mission: Impossible - Fallout", 2018, "movie", "action", "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg");


// anime Items

let item21 = new Item("Shingeki no Kyojin", 2013, "anime", "action", "https://cdn.myanimelist.net/images/anime/10/47347.webp");

let item22 = new Item("Sword Art Online", 2012, "anime", "action", "https://cdn.myanimelist.net/images/anime/11/39717.webp");

let item23 = new Item("One Punch Man", 2015, "anime", "action", "https://cdn.myanimelist.net/images/anime/12/76049.webp");

let item24 = new Item("Boku no Hero Academia", 2016, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/10/78745.webp");

let item25 = new Item("Fairy Tail", 2009, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/18179.webp");

let item26 = new Item("Ansatsu Kyoushitsu", 2015, "anime", "comedy", "https://cdn.myanimelist.net/images/anime/5/75639.webp");

let item27 = new Item("Tokyo Ghoul", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/5/64449.webp");

let item28 = new Item("Angel Beats!", 2010, "anime", "drama", "https://cdn.myanimelist.net/images/anime/10/22061.webp");

let item29 = new Item("Haikyuu!!", 2014, "anime", "drama", "https://cdn.myanimelist.net/images/anime/7/76014.webp");

let item30 = new Item("Dota: Dragon's Blood", 2021, "anime", "action", "https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABe8in7VbJ3banhIpwChLQfXefd3uwazbRLlUsZZFeghf39dtL-Io-Z3rmx-T2Q9UVECfKRygfVHsUpzHPQE1JO6ij5rz.jpg?r=792");

let item31 = new Item("Black Lagoon", 2006, "anime", "action", "https://cdn.anisearch.com/images/anime/cover/full/3/3462.jpg");

let item32 = new Item("The Legend of Korra", 2012, "anime", "action", "https://decider.com/wp-content/uploads/2020/05/the-legend-of-korra.jpg?quality=80&strip=all&w=680&h=356&crop=1");

let item33 = new Item("Gintama", 2006, "anime", "comedy", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Gintama%27firstdvd.jpg/220px-Gintama%27firstdvd.jpg");

let item34 = new Item("Mr. Osomatsu", 2015, "anime", "comedy", "https://images-na.ssl-images-amazon.com/images/I/81RO8JrCFxL._RI_.jpg");

let item35 = new Item("The Melancholy of Haruhi Suzumiya", 2006, "anime", "comedy", "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Haruhi_book_01_s.jpg/220px-Haruhi_book_01_s.jpg");

let item36 = new Item("Tari Tari", 2012, "anime", "drama", "https://i.ytimg.com/vi/bd9GrH88plU/maxresdefault.jpg");

let item37 = new Item("Kokoro Connect", 2012, "anime", "drama", "https://m.media-amazon.com/images/M/MV5BODQ1MDA2ZjYtMDU2Mi00ODE4LThlYTAtY2YzNGMwNTJjNTAxXkEyXkFqcGdeQXVyMjc0MjUzMzU@._V1_.jpg");

let item38 = new Item("Free!", 2013, "anime", "drama", "https://upload.wikimedia.org/wikipedia/en/9/9b/Free%21_promotional_image_1.jpg");

let item39 = new Item("Naruto", 2002, "anime", "action", "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg");

let item40 = new Item("Dragon Ball Super", 2015, "anime", "action", "https://upload.wikimedia.org/wikipedia/en/7/74/Dragon_Ball_Super_Key_visual.jpg");


// sereis 

let item41 = new Item("The Walking Dead", 2010, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg");

let item42 = new Item("Jupiter's Legacy ", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg");

let ite43 = new Item("Them", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg");

let item44 = new Item("Game of Thrones", 2011, "series", "action", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg");

let item45 = new Item("Vikings", 2013, "series", "action", "https://i.egycdn.com/pic/WmFwZndlY21MTmJ2Y21tdk5lY214anhQbXZtdnhtdg.jpg");

let item46 = new Item("Money Heist", 2017, "series", "action", "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg");

let item47 = new Item("Friends", 1994, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg");

let item48 = new Item("Schitt's Creek ", 2015, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg");

let item49 = new Item("The Big Bang Theory ", 2007, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg");

let item50 = new Item("Two and a Half Men", 2003, "series", "comedy", "https://i.pinimg.com/736x/e3/82/28/e38228df4f2b95992b03bd9c4204b173.jpg");

let item51 = new Item("Brooklyn Nine-Nine", 2013, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg");

let item52 = new Item("Modern Family", 2009, "series", "action", "https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/e06cb0991ee33445654b96d29aa0d02b/1200x627-Q80_e06cb0991ee33445654b96d29aa0d02b.jpg");

let item53 = new Item("The Punisher", 2017, "series", "action", "https://wallpapercave.com/wp/wp8822616.jpg");

let item54 = new Item("The Witcher", 2019, "series", "action", "https://arabicpost.net/wp-content/uploads/2019/12/thewitcher_101_unit_06900_rt-fk3ph4dhp-0.jpg");

let item55 = new Item("The Defenders", 2017, "series", "action", "https://i.ytimg.com/vi/7xE2AW0BTDI/maxresdefault.jpg");

let item56 = new Item("Chicago Fire", 2012, "series", "action", "https://upload.wikimedia.org/wikipedia/en/0/04/Chicago_Fire%2C_Season_Six.jpg");

let item57 = new Item("Peaky Blinders", 2013, "series", "drama", "https://i.guim.co.uk/img/media/64c687b75da57f3e82d9fcfd019a4103ce81db15/0_143_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b03ca8f1265401501deb033c7481740e");

let item58 = new Item("Suits", 2011, "series", "drama", "https://images-na.ssl-images-amazon.com/images/I/71HGgigujnL._SY445_.jpg");

let item59 = new Item("House of Cards", 2013, "series", "drama", "https://upload.wikimedia.org/wikipedia/en/0/0b/House_of_Cards_season_1.png");

let item60 = new Item("How I Met Your Mother", 2005, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_.jpg");


getData();
