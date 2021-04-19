'use strict';


function FormPage(Name, YearOfProduction, catogary,browser, file) {
  this.Name = Name;
  this.YearOfProduction = YearOfProduction;
  // this.Rating = Rating;
  this.browser = browser;
  this.file = file;
  this.catogary=catogary;
  //create array as object 
  FormPage.addForm.push(this);


}
FormPage.addForm = [];


let image = document.getElementById('file');
let form = document.getElementById('form');
let submit = document.getElementById('submit');
let display = document.getElementById('display');

form.appendChild(submit);








//create eventlistner
form.addEventListener('submit', UserClick);

// create render function to show new elemnt in next page that selecetd
// function render() {

//   for (let i = 0; i < FormPage.addForm.length; i++) {

//     let box = document.createElement('div');
//     display.appendChild(box);

//     let image = document.createElement('img');
//     box.appendChild(image);
//     image.style.height = "100px";
//     image.style.width = "100px";

//     let myP = document.createElement('p');
//     box.appendChild(myP);

//     myP.innerHTML = (`${FormPage.addForm[i].Name} \n ${FormPage.addForm[i].YearOfProduction} \n ${FormPage.addForm[i].Rating} \n ${FormPage.addForm[i].catogary} \n ${FormPage.addForm[i].browser}`);


//     image.src = FormPage.addForm[i].file;



//   }



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
  let catogaryMSA=event.target.catogary.value;
  console.log(catogaryMSA);

  let fileMSA = event.target.file.value;
  console.log(fileMSA);

  const add = new FormPage(NameMSA, YearOfProductionMSA, RatingMSA,catogaryMSA ,browserMSA, fileMSA);
  console.log(add);
  updateStorage();



  if (browserMSA == 'movie') {
    alert('Thank you for your updating ');
    // let arr= getForm();
  
window.location.href = "movies.html";

    //  let fr = localStorage.getItem('FormPage.addForm ');
      
    //   document.getElementById('result').innerHTML = fr;
  
  }
    // arr.push(window.location.assign("movies.html") )
// ;    
// render();


    //let data = localStorage.getItem('product');
  

  
  else if (browserMSA == 'series') {
    alert('Thank you for your updating ');

    window.location.href = "series.html";
    getForm();
    

  }
  else {
    alert('Thank you for your updating ');

    window.location.href = "anime.html";
    getForm();
    
render();
  }
}


  submit.removeEventListener('submit', UserClick);





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

getForm()