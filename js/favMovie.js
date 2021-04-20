'use strict';
let div = document.getElementById('s');
let clearAll = document.getElementById('clearAll');
let allItem = [];
let added = [];
// let toRemove = [];

 //link everyelemnt to its class name for design
function getData() {
    div.innerHTML='';
    let stringOb=localStorage.getItem('favourites');
    let normalOb=JSON.parse(stringOb);
    if (normalOb) {
      added=normalOb;
      console.log(stringOb);
      for (let i = 0; i < normalOb.length; i++) {
        console.log('inside get data',normalOb);
        new Item(normalOb[i].name,normalOb[i].year,normalOb[i].catagory,normalOb[i].type,normalOb[i].sourse);
        let innerDiv = document.createElement('tr');
        div.appendChild(innerDiv);
        innerDiv.className = 'box';
        let img = document.createElement('img');
        innerDiv.appendChild(img);
        img.src = allItem[i].sourse;
        img.style.width='100px';
        let pa = document.createElement('td');
        innerDiv.appendChild(pa);
        pa.textContent = allItem[i].name;
        let type = document.createElement('td');
        innerDiv.appendChild(type);
        type.textContent = allItem[i].type;
        let deleteIcon = document.createElement('button');
        deleteIcon.classList.add("delete"); //don't forget for styling
        // deleteIcon.setAttribute('data',allItem[i].sourse);//
        deleteIcon.setAttribute('id',allItem[i].name);
        innerDiv.appendChild(deleteIcon);
        deleteIcon.textContent = 'X';  
        deleteIcon.style.color= 'red';
      }
}
div.addEventListener('click',deleteItem);
function deleteItem(e){
    if (e.target.id !== "s" ){
//   if (e.target.classList.contains('delete')){

    // let attributeKey =e.target.getAttribute('data');
    for (let i = 0; i < allItem.length; i++){

           if (e.target.id== allItem[i].name){
            allItem.splice(i,1); //remove all elements in that index
           
           }
      }
   //deleteItemFromLocal(attributeKey);
    // e.target.parentElement.remove(); //parent which is row // parent parent is innerdiv
    let addItemToDelete = JSON.stringify(allItem);
    localStorage.setItem('favourites', addItemToDelete);
    getItemToRemove();
  //  removeFav();
  }
}
// getItemToRemove();

console.log('added',added);
console.log('allitem',allItem);
// function deleteItemFromLocal(attributeName){
//   for (let i = 0; i < added.length; i++){
//     //   if (added[i].sourse === attributeName[i]){
//         let x = console.log('splice',allItem.splice(i,1)); //remove all elements in that index
//         let addItemToDelete = JSON.stringify(added);
//        console.log('set',localStorage.setItem('deleteKey', addItemToDelete));
//       // }
//   }
// //   removeSingleItem();
// }


function getItemToRemove(){
    // const items = localStorage.getItem('favourites');
    // // if (items === null){
    // //     allItem = [];
    // // }else{
    //   added = JSON.parse(items);
      getData();
    //  maube get what added to fav
    // }
  }
clearAll.addEventListener('click',clearAllFun);
function clearAllFun(){
    div.textContent = '';
    removeFav();
}
console.log(allItem);
}
getData();
  function Item(name, year, catagory, type, sourse) {
    this.name = name;
    this.year = year;
    this.catagory = catagory;
    this.type = type;
    this.sourse = sourse;  
    allItem.push(this);
  }
  function removeFav() {
    localStorage.removeItem('favourites');
}
//   function removeSingleItem(x){
    
    

//   }
  console.log(added);
