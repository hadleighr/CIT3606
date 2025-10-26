const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const myImg = new Image();
myImg.src = 'sable.png'; 
myImg.onload = function(){
    ctx.drawImage(myImg, 250,250, 150, 200); 
            
}
const myImg2 = new Image();
myImg2.src = 'ghostface.png';
myImg2.onload = function(){
    ctx.drawImage(myImg2, 0, 0, 100, 100); 
             
}

    setInterval( drawFunction, 800);

let x= Math.random() * canvas.width;
y= Math.random() * canvas.height;
x2= Math.random() * canvas.width;
y2= Math.random() * canvas.height;

function drawFunction() {
    ctx.clearRect(0, 0, 500 , 500);
    x= Math.random() * (canvas.width - 100);
    y= Math.random() * (canvas.height - 100);
    x2= Math.random() * (canvas.width - 100);
    y2= Math.random() * (canvas.height - 100);
    ctx.drawImage (myImg, x, y, 100, 100);
    ctx.drawImage(myImg2, x2, y2, 100, 100); 
}
 score = 1
 myCanvas.onmousedown = function (e) 
   { if (e.clientX > x &&
        e.clientX < x + 200 &&
        e.clientY > y &&
        e.clientY < y + 200) 
        {alert("You clicked Sable! Your score is "+ score++)};
     if(e.clientX > x2 &&
        e.clientX < x2 + 200 &&
        e.clientY > y2 &&
        e.clientY < y2 + 200)
        {alert("You clicked Ghostface! Your score is "- score--)}
    };

