const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const myImg = new Image();
myImg.src = 'kiriko.jpg'; 
myImg.onload = function(){
    ctx.drawImage(myImg, 150, 150, 75, 150); 
}

const myImg2 = new Image();
myImg2.src = 'widow.png';
myImg2.onload = function(){
    ctx.drawImage(myImg2, 150, 150, 75, 150); 
             
}
