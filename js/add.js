'use strict';


function formPage(Name,YearOfProduction,Rating,Type,file){
this.Name=Name;
this.YearOfProduction=YearOfProduction;
this.Rating=Rating;
this.Type=Type;
this.file=file;
addForm.push(this);
}
let image=document.getElementById('file');
let addForm=[];
let form=document.getElementById('form');

//create render function
formPage.prototype.render=function(){
image=image.file
}



//create eventlistner
let submit=document.getElementById('submit')
form.addEventListener('submit', UserClick);



//creat the UserClick function 
function UserClick(event) {
   
    // if (event.target.id !== 'images') {
   
    //    prevent the default behaviour of refreshing the page

  event.preventDefault();

  let Name = event.target.Name.value;
  console.log(Name);
  let YearOfProduction = parseInt(event.target.YearOfProduction.value);
  console.log(YearOfProduction);
  let Rating = parseInt(event.target.Rating.value);
  console.log(Rating);
  let browser=event.target.browser.value;
  console.log(browser);
  
  

    //    if(event.target.id=='movie'){
    //     Window.location='movies.html';
    //    }

   }
