'use strict';


function FormPage(Name, YearOfProduction, Rating, browser, file) {
  this.Name = Name;
  this.YearOfProduction = YearOfProduction;
  this.Rating = Rating;
  this.browser = browser;
  this.file = file;
  //create array as object 
  FormPage.addForm.push(this);


}
FormPage.addForm = [];


let image = document.getElementById('file');
let form = document.getElementById('form');
let submit = document.getElementById('submit');
form.appendChild(submit);








//create eventlistner
form.addEventListener('submit', UserClick);



//creat the UserClick function 
function UserClick(event) {
  //    prevent the default behaviour of refreshing the page

  event.preventDefault();

  let NameMSA = event.target.Name.value;
  console.log(NameMSA);
  let YearOfProductionMSA = parseInt(event.target.YearOfProduction.value);
  console.log(YearOfProductionMSA);
  let RatingMSA = parseInt(event.target.Rating.value);
  console.log(RatingMSA);
  let browserMSA = event.target.browser.value;
  console.log(browserMSA);

  let fileMSA = event.target.file.value;
  console.log(fileMSA);

  const add = new FormPage(NameMSA, YearOfProductionMSA, RatingMSA, browserMSA, fileMSA);
  console.log(add);
  updateStorage();



  if (browserMSA == 'movie') {
    alert('Thank you for your updating ');
    
    window.location.href = "movies.html";
    //let data = localStorage.getItem('product');


  }
  else if (browserMSA == 'series') {
    alert('Thank you for your updating ');

    window.location.href = "series.html";
  }
  else {
    alert('Thank you for your updating ');

    window.location.href = "anime.html";
  }



  submit.removeEventListener('submit', UserClick);

}


//create function for update storge
function updateStorage() {

  let arrayString = JSON.stringify(FormPage.addForm);
  console.log(FormPage.addForm);
  console.log(arrayString);
  //set item by put key and value
  localStorage.setItem('product', arrayString);
}
//updateStorage();

// console.log(updateStorage());


// get the data from local storge
function getForm() {
  // get the data from the local storage
  let data = localStorage.getItem('product');
  console.log(data);

  //convert data back into a normal array of objects
  let productData = JSON.parse(data);

  console.log(productData);

  // if the first time we visit the page, there will not be an array of objects inside the local storage so we should handle it here:
  if (productData !== null) {
    FormPage.addForm = productData;
  }

}

getForm();