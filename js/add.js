'use strict';

// miss one para element (Type) !!!!!!

function FormPage(name, year, catagory, type, sourse) {
  this.name = name;
  this.year = year;
  // this.Rating = Rating;
  this.catagory = catagory;
  this.type = type;
  this.sourse = sourse;
  //create array as object 
  FormPage.addForm.push(this);
 

}

FormPage.addForm = [];

// let item1 = new FormPage("kkkk", 2020, 4, "movie", "asdqasd", "asdasd");
// let item2 = new FormPage("mmmm", 455, 6, "anime", "mmmmmm", "zzzzzzzz");

// let item3 = new FormPage("lolo", 2020, 4, "movie", "asdqasd", "asdasd");
// let item4 = new FormPage("cccccc", 455, 6, "anime", "mmmmmm", "zzzzzzzz");
// //let item3 = new FormPage("lololol", 455, 6, "anime", "mmmmmm", "zzzzzzzz");

// console.log(FormPage.addForm);




let image = document.getElementById('sourse');
let form = document.getElementById('form');
let submit = document.getElementById('submit');
let display = document.getElementById('display');

form.appendChild(submit);








//create eventlistner
// form.addEventListener('submit', UserClick);

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

//     myP.innerHTML = (`${FormPage.addForm[i].name} \n ${FormPage.addForm[i].year} \n ${FormPage.addForm[i].Rating} \n ${FormPage.addForm[i].catagory} \n ${FormPage.addForm[i].type}`);


//     image.src = FormPage.addForm[i].sourse;



//   }


form.addEventListener('submit', UserClick);

//creat the UserClick function 
function UserClick(event) {
  //    prevent the default behaviour of refreshing the page

  event.preventDefault();

  let nameMSA = event.target.NameField.value;
  console.log(nameMSA);
  let yearMSA = parseInt(event.target.yearId.value);
  console.log(yearMSA);
  // let RatingMSA = parseInt(event.target.Rating.value);
  // console.log(RatingMSA);
  let catagoryMSA = event.target.catogaryId.value;
  console.log(catagoryMSA);

  let typeMSA = event.target.typeId.value;
  let typeMSA1= typeMSA.toLowerCase();
  // typeMSA.toLowerCase();
  console.log(typeMSA);

  let sourseMSA = event.target.sourseId.value;
  console.log(sourseMSA);

  const add = new FormPage(nameMSA, yearMSA, catagoryMSA, typeMSA1, sourseMSA);
  console.log(add);
  updateStorage();



  if (catagoryMSA == 'movie') {
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



  else if (catagoryMSA == 'series') {
    alert('Thank you for your updating ');

    // window.location.href = "series.html";
    getForm();


  }
  else {
    alert('Thank you for your updating ');
    //window.location.href = "anime.html";
    getForm();


  }
}


// submit.removeEventListener('submit', UserClick);





//create function for update storge
function updateStorage() {
//(name, year, catagory, type, sourse)
  let arrayString = JSON.stringify(FormPage.addForm);
  //console.log(FormPage.addForm);
  //console.log(arrayString);
  //set item by put key and value
  localStorage.setItem('product', arrayString);

}
//updateStorage();

// console.log(updateStorage());


// get the data from local storge
function getForm() {
  // get the data from the local storage
  let data = localStorage.getItem('product');
  //console.log(data);

  //convert data back into a normal array of objects
  let productData = JSON.parse(data);
  //console.log(productData);



  // if the first time we visit the page, there will not be an array of objects inside the local storage so we should handle it here:
  if (productData !== null) {
    FormPage.addForm = productData;
  }


}
getForm();

