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
var kiriko = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var widowmaker = {
	x: 0,
	y: 0
};
var healing = 0;

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var reset = function () {
	kiriko.x = canvas.width / 2;
	kiriko.y = canvas.height / 2;

	
	widowmaker.x = 32 + (Math.random() * (canvas.width - 64));
	widowmaker.y = 32 + (Math.random() * (canvas.height - 64));
};
var update = function (modifier) {
	if (38 in keysDown) 
		kiriko.y -= kiriko.speed * modifier;
	}
	if (40 in keysDown) { 
		kiriko.y += kiriko.speed * modifier;
	}
	if (37 in keysDown) { 
		kiriko.x -= kiriko.speed * modifier;
	}
	if (39 in keysDown) { 
		kiriko.x += kiriko.speed * modifier;
	}

	
	if (
		kiriko.x <= (widowmaker.x + 32)
		&& widowmaker.x <= (kiriko.x + 32)
		&& kiriko.y <= (widowmaker.y + 32)
		&& widowmaker.y <= (kiriko.y + 32)
	) {
		++widowmakerHealed;
		reset();
	}
    var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	requestAnimationFrame(main);
    }
    var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    var w = window;

    var then = Date.now();
reset();
main();