'use strict';

let div = document.getElementById('s');
let clearAll = document.getElementById('clearAll');
let allItem = [];
let added = [];

let checkVar = 0;



// To render from local storage 
function getData() {
  // div.textContent = '';
  let stringOb = localStorage.getItem('favourites');
  let normalOb = JSON.parse(stringOb);
  if (normalOb) {
    added = normalOb;
    // console.log(stringOb);
   
    
    for (let i = 0; i < normalOb.length; i++) {
      console.log('inside get data', normalOb);
      new Item(normalOb[i].name, normalOb[i].year, normalOb[i].catagory, normalOb[i].type, normalOb[i].sourse);
      
      let innerDiv = document.createElement('tr');
      div.appendChild(innerDiv);
      innerDiv.className = 'box';

      let img = document.createElement('img');
      innerDiv.appendChild(img);
      img.src = allItem[i].sourse;
      img.style.width = '100px';

      let pa = document.createElement('td');
      pa.id='last';
      innerDiv.appendChild(pa);
      pa.textContent = allItem[i].name;

      let type = document.createElement('td');
      innerDiv.appendChild(type);
      type.id='last2';
      type.textContent = allItem[i].type;

      let deleteIcon = document.createElement('button');
      deleteIcon.classList.add("delete"); //don't forget for styling
      // deleteIcon.setAttribute('data',allItem[i].sourse);//
      deleteIcon.setAttribute('id', allItem[i].name);
      innerDiv.appendChild(deleteIcon);
      deleteIcon.textContent = 'X';
      deleteIcon.style.color = 'red';
      let line = document.createElement('hr');
      div.appendChild(line);

    }
  }
  
}




// To delete an item which selected by the user 
div.addEventListener('click', deleteItem);
function deleteItem(e) {
  if (e.target.id !== "s") {
    //   if (e.target.classList.contains('delete')){

    // let attributeKey =e.target.getAttribute('data');
    for (let i = 0; i < allItem.length; i++) {

      if (e.target.id == allItem[i].name) {
        allItem.splice(i, 1); //remove all elements in that index

      }
    }
    //deleteItemFromLocal(attributeKey);
    e.target.parentElement.remove(); //parent which is row // parent parent is innerdiv
    let addItemToDelete = JSON.stringify(allItem);
    localStorage.setItem('favourites', addItemToDelete);
    
    // getData();
  }
}


// To delete all the items
clearAll.addEventListener('click', clearAllFun);
function clearAllFun() {
  div.textContent = '';
  removeFav();
}

function removeFav() {
  localStorage.removeItem('favourites');
}


// To display the delete icon

if (allItem.length <= 0) {
  clearAll.hidden = false;
  console.log('hidden = false',allItem);
}else if(allItem.length > 0 ) {
  clearAll.hidden = true;
  console.log('hidden = true',allItem);
}

 

getData();


// Constructor function 
function Item(name, year, catagory, type, sourse) {
  this.name = name;
  this.year = year;
  this.catagory = catagory;
  this.type = type;
  this.sourse = sourse;
  allItem.push(this);
}



