

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
