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


const display = document.getElementById('movies-display');
/*********************Noor&Ibrahem**************************/
const clearCartBtn  = document.getElementById("#clearCart");
const tableBody = document.getElementById('tableBody');
const clearAll = document.getElementById('clearCart');
///////////////////// making the table 
function addItemToLocal(){
let itemSeperate = JSON.stringify(allItem);
// console.log(itemSeperate);
localStorage.setItem("key", itemSeperate);
}
let itemNotSeperate = JSON.parse(localStorage.getItem("key"));
console.log(itemNotSeperate);
// making the table 
let noor = function () {
  
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
    deleteIcon.classList.add("delete");
    deleteIcon.setAttribute('data',allItem[i].sourse);
    firstRowElemnt.appendChild(deleteIcon);
    deleteIcon.textContent = 'X';  
    deleteIcon.style.color= 'red';
    //link everyelemnt to its class name for design
  }
}
//click for add element ...
/* Not added yet */
//click for clear item ..
tableBody.addEventListener('click',deleteItem);
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
        allItem.splice(i,1)
      }
  }
  addItemToLocal();
}
//to delete all
clearAll.addEventListener('click',deleteAll);
function deleteAll(e){
  e.preventDefault();
  while(tableBody!=null){ //tableBody.firstChild
    tableBody.removeChild(tableBody.firstChild);
  }
 // allItem = [];
  addItemToLocal();
  
}

console.log(noor());
allItem.image;
console.log(allItem[0].name);
/***************Finish Ibraheem&Noor Part**************************/
let box = document.createElement('div');
function render() {
  
  //display.appendChild(box);
  for (let i = 0; i < allItem.length; i++) {
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
/*
let allDisplay = document.getElementById('all');

allDisplay.addEventListener('click', allClick);

function allClick() {
  box.textContent = ''
  render();
  
}

let comedy = document.getElementById('comedy');

comedy.addEventListener('click', comedyClick);


function comedyClick() {

  box.textContent = ''
  
  for (let i = 0; i < allItem.length; i++) {
    if (allItem[i].movieType == "comedy") {
      let box = document.createElement('div');
      //display.appendChild(box);



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

    box.textContent = ''
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].movieType == "action") {
        let box = document.createElement('div');
     //   display.appendChild(box);

        



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

    box.textContent = ''
    for (let i = 0; i < allItem.length; i++) {
      if (allItem[i].movieType == "drama") {
        let box = document.createElement('div');
  //      display.appendChild(box);

        



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

  */