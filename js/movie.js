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

let item33 = new Item("Gintama", 2006, "anime", "comedy", "https://i.pinimg.com/originals/6a/9a/e1/6a9ae1584d676f3818afe468c85c648b.jpg");

let item34 = new Item("Mr. Osomatsu", 2015, "anime", "comedy", "https://images-na.ssl-images-amazon.com/images/I/81RO8JrCFxL._RI_.jpg");

let item35 = new Item("The Melancholy of Haruhi Suzumiya", 2006, "anime", "comedy", "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Haruhi_book_01_s.jpg/220px-Haruhi_book_01_s.jpg");

let item36 = new Item("Tari Tari", 2012, "anime", "drama", "https://i.ytimg.com/vi/bd9GrH88plU/maxresdefault.jpg");

let item37 = new Item("Kokoro Connect", 2012, "anime", "drama", "https://cdn.myanimelist.net/images/anime/2/39665.jpg");

let item38 = new Item("Free!", 2013, "anime", "drama", "https://upload.wikimedia.org/wikipedia/en/9/9b/Free%21_promotional_image_1.jpg");

let item39 = new Item("Naruto", 2002, "anime", "action", "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg");

let item40 = new Item("Dragon Ball Super", 2015, "anime", "action", "https://upload.wikimedia.org/wikipedia/en/7/74/Dragon_Ball_Super_Key_visual.jpg");


// sereis 

let item41 = new Item("The Walking Dead", 2010, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item42 = new Item("Jupiter's Legacy ", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let ite43 = new Item("Them", 2021, "series", "drama", "https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY98_CR5,0,67,98_AL_.jpg");

let item44 = new Item("Game of Thrones", 2011, "series", "action", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY98_CR2,0,67,98_AL_.jpg");

let item45 = new Item("Vikings", 2013, "series", "action", "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item46 = new Item("Money Heist", 2017, "series", "action", "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item47 = new Item("Friends", 1994, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg");

let item48 = new Item("Schitt's Creek ", 2015, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let item49 = new Item("The Big Bang Theory ", 2007, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX182_CR0,0,182,268_AL_.jpg");

let item50 = new Item("Two and a Half Men", 2003, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg");

let item51 = new Item("Brooklyn Nine-Nine", 2013, "series", "comedy", "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UY1200_CR90,0,630,1200_AL_.jpg");

let item52 = new Item("Modern Family", 2009, "series", "action", "https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/e06cb0991ee33445654b96d29aa0d02b/1200x627-Q80_e06cb0991ee33445654b96d29aa0d02b.jpg");

let item53 = new Item("The Punisher", 2017, "series", "action", "https://i.pinimg.com/originals/c0/df/ce/c0dfce00051900ebd2006bffc4478001.jpg");

let item54 = new Item("The Witcher", 2019, "series", "action", "https://arabicpost.net/wp-content/uploads/2019/12/thewitcher_101_unit_06900_rt-fk3ph4dhp-0.jpg");

let item55 = new Item("The Defenders", 2017, "series", "action", "https://i.ytimg.com/vi/7xE2AW0BTDI/maxresdefault.jpg");

let item56 = new Item("Chicago Fire", 2012, "series", "action", "https://upload.wikimedia.org/wikipedia/en/0/04/Chicago_Fire%2C_Season_Six.jpg");

let item57 = new Item("Peaky Blinders", 2013, "series", "drama", "https://i.guim.co.uk/img/media/64c687b75da57f3e82d9fcfd019a4103ce81db15/0_143_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b03ca8f1265401501deb033c7481740e");

let item58 = new Item("Suits", 2011, "series", "drama", "https://images-na.ssl-images-amazon.com/images/I/71HGgigujnL._SY445_.jpg");

let item59 = new Item("House of Cards", 2013, "series", "drama","https://upload.wikimedia.org/wikipedia/en/0/0b/House_of_Cards_season_1.png");

let item60 = new Item("How I Met Your Mother", 2005, "series", "comedy","https://upload.wikimedia.org/wikipedia/en/a/aa/How_I_Met_Your_Mother_S9.jpg");




let displayMovies = document.getElementById('movies');
let displaySeries = document.getElementById('series');
let displayAnimes = document.getElementById('anime');



// To render all movies
function renderMovies() { //prototype

  for (let i = 0; i < allItem.length; i++) {

    if (displayMovies !== null) {

      if (allItem[i].catagory === "movie") {

        let box = document.createElement('div');
        displayMovies.appendChild(box);

        let image = document.createElement('img');
        box.appendChild(image);
        //image.style.height = "100px";
        //image.style.width = "100px";
        /*************************/
        let favButton = document.createElement("button");
        box.appendChild(favButton);
        favButton.classList.add('favClass');
        favButton.textContent='Add to fav';
        /************************/
        let myP = document.createElement('p');
        box.appendChild(myP);



        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;
     //   favButton.addEventListener("dblclick", favFunction);
      }
    }




  }
  //favButton.addEventListener("dblclick", favFunction);
}
// function favFunction(e){
//   e.preventDefault();
//   if (e.target.classList.contains("favClass")){
//       const info = e.target.parentElement;
//       for(let i=0; i<allItem.length; i++){
//       if (allItem[i].sourse === attributeName[i]){
//        listGenerator();
//       }
//     }
//   }
// }

renderMovies();

renderMovies();


// To render all Series
function renderSeries() {

  for (let i = 0; i < allItem.length; i++) {
    if (displaySeries !== null) {

      if (allItem[i].catagory === "series") {

        let box = document.createElement('div');
        displaySeries.appendChild(box);

        let image = document.createElement('img');
        box.appendChild(image);
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);



        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;

      }
    }



  }

}

renderSeries();

// To render all Anime
function renderAnime() {
  for (let i = 0; i < allItem.length; i++) {
    if (displayAnimes !== null) {

      if (allItem[i].catagory === "anime") {

        let box = document.createElement('div');
        displayAnimes.appendChild(box);

        let image = document.createElement('img');
        box.appendChild(image);
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);



        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;

      }
    }



  }

}
renderAnime()







// Events for the sorting  


// To display all movies or anime or series

let allDisplay = document.getElementById('all');
if (allDisplay!= null){
allDisplay.addEventListener('click', allClick);
}
function allClick() {

  if (displayMovies !== null) {

    displayMovies.textContent = ''

    renderMovies();
  } else if (displaySeries !== null) {

    displaySeries.textContent = ''

    renderSeries();
  } else if (displayAnimes !== null) {

    displayAnimes.textContent = ''

    renderAnime();

    
  }
  

}


  // To sort it by Comedy
let comedy = document.getElementById('comedy');
if (comedy!=null){
comedy.addEventListener('click', comedyClick);
}

function comedyClick() {

  if (displayMovies !== null) {

    displayMovies.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "comedy" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;

      }


    }
  }


  }




  // To sort it by Action
let action = document.getElementById('action');
if(action!=null){
action.addEventListener('click', actionClick);
}

function actionClick() {

  if (displayMovies !== null) {

    displayMovies.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "action" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        // // image.style.height = "100px";
        // // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;

      }


    }
  }

  

}

// To sort by Daram

let drama = document.getElementById('drama');
if (drama != null){
drama.addEventListener('click', dramaClick);
}

function dramaClick() {
  
  if (displayMovies !== null) {

    displayMovies.textContent = ''

    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].type == "drama" && allItem[i].catagory == "movie") {
        let box = document.createElement('div');
        displayMovies.appendChild(box);



        let image = document.createElement('img');
        box.appendChild(image);
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


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
        // image.style.height = "100px";
        // image.style.width = "100px";

        let myP = document.createElement('p');
        box.appendChild(myP);

        myP.innerHTML = (`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].type}`);


        image.src = allItem[i].sourse;

      }


    }
  }
}
/*********************Noor&Ibrahem**************************/
const tableBody = document.getElementById('tableBody');
const clearAll = document.getElementById('clearCart');
///////////////////// making the table 
function addItemToLocal(){
let itemSeperate = JSON.stringify(allItem);
// console.log(itemSeperate);
localStorage.setItem("key", itemSeperate);
}
function showItemsFromLocal(){
let itemNotSeperate = JSON.parse(localStorage.getItem("key"));
console.log(itemNotSeperate);
}
// making the table 
let listGenerator = function () {
  
  for (let i = 0; i < allItem.length; i++) {
    let firstRowElemnt = document.createElement('tr');
    tableBody.appendChild(firstRowElemnt);
    let imageCoulmn = document.createElement('img');
    firstRowElemnt.appendChild(imageCoulmn);
    imageCoulmn.src = allItem[i].sourse;
    imageCoulmn.style.width = '100px';
    let nameColumn = document.createElement('td');
    firstRowElemnt.appendChild(nameColumn);
    nameColumn.textContent = allItem[i].name;
    //deleteItem
    let deleteIcon = document.createElement('td');
    deleteIcon.classList.add("delete"); //don't forget for styling
    deleteIcon.setAttribute('data',allItem[i].sourse);//
    firstRowElemnt.appendChild(deleteIcon);
    deleteIcon.textContent = 'X';  
    deleteIcon.style.color= 'red';
    //link everyelemnt to its class name for design
  }
}
//click for add element ...
/* Not added yet */
//click for clear item ..
if (tableBody != null){
tableBody.addEventListener('click',deleteItem);
}
function deleteItem(e){
  if (e.target.classList.contains('delete')){
      let attributeName = e.target.getAttribute('data');
      deleteItemFromLocal(attributeName);
    e.target.parentElement.remove(); //parent which is row // parent parent is tbody
  }
}
function deleteItemFromLocal(attributeName){
  for (let i = 0; i < allItem.length; i++){
      if (allItem[i].sourse === attributeName[i]){
        let x = allItem.splice(i); //remove all elements in that index
      //  localStorage.removeItem(i);
      }
  }
  addItemToLocal();
}
//to delete all
if (clearAll!= null){
clearAll.addEventListener('click',deleteAll);
}
function deleteAll(e){
  e.preventDefault();
  while(tableBody!=null){ //tableBody.firstChild
    tableBody.removeChild(tableBody.firstChild);
  }
 // allItem = [];
  addItemToLocal();
  
}
addItemToLocal();
showItemsFromLocal();
console.log(listGenerator());
allItem.image;
console.log(allItem[0].name);
/***************Finish Ibraheem&Noor Part**************************/

