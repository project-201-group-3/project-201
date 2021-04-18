'use strict'

let allItem=[];

function Item(name , year ,type , movieType ,   sourse ){

  this.name = name;
  this.year = year;
  this.type =type;
  this.sourse=sourse;
  this.movieType=movieType;
  

  allItem.push(this);

}


 let item1 = new Item("john wick" , 2018 , "movie" ,"drama" ,  "image/wick.jpg");
 let item2 = new Item("john wick" , 2018 , "anime" , "action","https://media.gettyimages.com/photos/keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-on-picture-id1146739180?s=612x612" );
 let item3 = new Item("john wick" , 2018 , "anime"  ," action","https://media.gettyimages.com/photos/keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-on-picture-id1146739180?s=612x612" );
 let item4 = new Item("john wick" , 2018 , "series" ,"comedy" ,"https://media.gettyimages.com/photos/keanu-reeves-attends-the-john-wick-special-screenings-at-ham-yard-on-picture-id1146739180?s=612x612" );


 console.log(allItem);


 let display =document.getElementById('movies-display');

 function render(){
 
    for(let i=0 ; i<allItem.length ; i ++){

      let box =document.createElement('div');
      display.appendChild(box);

      let image =document.createElement('img');
      box.appendChild(image);
      image.style.height="100px";
      image.style.width="100px";

      let myP=document.createElement('p');
      box.appendChild(myP);

      myP.innerHTML=(`${allItem[i].name} \n ${allItem[i].year} \n ${allItem[i].name}`);

         
      image.src= allItem[i].sourse;


    }
        
 }
 
render();


 let comedy =document.getElementById('comedy');

 comedy.addEventListener('click' , comedyClick);


 function comedyClick(){
   
    for(let i =0 ; i< allItem.length ; i++){
      
        if(allItem[i].movieType == "comedy");
         

        for(let j = 0 ; j<allItem ; j++){

            if(allItem[j].movieType.includes("action") || allItem[j].movieType.includes("drama")){

                allItem[j].pop();


            }
           
        }
     
        render();

        
    }
  

 }






