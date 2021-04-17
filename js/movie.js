'use strict'

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
