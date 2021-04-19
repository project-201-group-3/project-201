

'use strict'


/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// let button = document.getElementById('button');
// form.addEventListener('button',SubmitAdd);

// function SubmitAdd(event){
//   // prevent the default behaviour of refreshing the page
//   event.preventDefault();
//   let Name = event.target.Name.value;
//   console.log(Name);
//   let YearOfProduction = parseInt(event.target.YearOfProduction.value);
//   console.log(YearOfProduction);
//   let Rating = parseInt(event.target.Rating.value);
//   console.log(Rating);
//   let Image = event.target.Image.value;
//   console.log(Image);
// }


//creat constructor 
/*
let allItem=[];

function Item(name , year ,type , type2){

  this.name = name;
  this.year = year;
  this.type =type;
  this.type2=type2;

  allItem.push(this);

}


 let item1 = new Item("john wick" , 2018 , "movie" , "drama" );
 let item2 = new Item("john wick" , 2018 , "movie" , "drama" );
 let item3 = new Item("john wick" , 2018 , "movie" , "drama" );
 let item4 = new Item("john wick" , 2018 , "movie" , "drama" );


 console.log(allItem);

*/
/*************************************************************/
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
// /*********************Noor&Ibrahem**************************/
// const tableBody = document.getElementById('tableBody');
// const clearAll = document.getElementById('clearCart');
// ///////////////////// making the table 
// function addItemToLocal(){
// let itemSeperate = JSON.stringify(allItem);
// // console.log(itemSeperate);
// localStorage.setItem("key", itemSeperate);
// }
// function showItemsFromLocal(){
// let itemNotSeperate = JSON.parse(localStorage.getItem("key"));
// console.log(itemNotSeperate);
// }
// // making the table 
// let noor = function () {
  
//   for (let i = 0; i < allItem.length; i++) {
//     let firstRowElemnt = document.createElement('tr');
//     tableBody.appendChild(firstRowElemnt);
//     let imageCoulmn = document.createElement('img');
//     firstRowElemnt.appendChild(imageCoulmn);
//     imageCoulmn.src = allItem[i].sourse;
//     imageCoulmn.style.width = '100px';
//     let nameColumn = document.createElement('td');
//     firstRowElemnt.appendChild(nameColumn);
//     nameColumn.textContent = allItem[i].name;
//     //deleteItem
//     let deleteIcon = document.createElement('td');
//     deleteIcon.classList.add("delete"); //don't forget for styling
//     deleteIcon.setAttribute('data',allItem[i].sourse);//
//     firstRowElemnt.appendChild(deleteIcon);
//     deleteIcon.textContent = 'X';  
//     deleteIcon.style.color= 'red';
//     //link everyelemnt to its class name for design
//   }
// }
// //click for add element ...
// /* Not added yet */
// //click for clear item ..
// tableBody.addEventListener('click',deleteItem);
// function deleteItem(e){
//   if (e.target.classList.contains('delete')){
//       let attributeName = e.target.getAttribute('data');
//       deleteItemFromLocal(attributeName);
//     e.target.parentElement.remove(); //parent which is row // parent parent is tbody
//   }
// }
// function deleteItemFromLocal(attributeName){
//   for (let i = 0; i < allItem.length; i++){
//       if (allItem[i].sourse === attributeName[i]){
//         let x = allItem.splice(i); //remove all elements in that index
//       //  localStorage.removeItem(i);
//       }
//   }
//   addItemToLocal();
// }
// //to delete all
// clearAll.addEventListener('click',deleteAll);
// function deleteAll(e){
//   e.preventDefault();
//   while(tableBody!=null){ //tableBody.firstChild
//     tableBody.removeChild(tableBody.firstChild);
//   }
//  // allItem = [];
//   addItemToLocal();
  
// }

// console.log(noor());
// allItem.image;
// console.log(allItem[0].name);
/***************Finish Ibraheem&Noor Part**************************/