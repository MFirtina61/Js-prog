
var canvas = document.getElementById('canvasId');
var g = canvas.getContext('2d');
g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;
var gX = canvas.width / 2;
var gY = canvas.height / 2;
var black = "#FF0000";
var white = "#FFF";


g.beginPath();
g.moveTo(300,100);
g.lineTo(700,200);
g.lineTo(600,400);
g.lineTo(200,300);
g.lineTo(300,100);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.moveTo(200,300);
g.lineTo(200,500);
g.lineTo(600,600);
g.lineTo(600,400);
g.lineTo(200,300);
g.fillStyle = black;
g.fill();
g.closePath();

g.beginPath();
g.fillStyle = black;
g.moveTo(600, 400);
g.lineTo(600, 600);
g.lineTo(800, 500);
g.lineTo(800, 300);
g.lineTo(700, 200);
g.lineTo(600, 400);
g.closePath();
g.stroke();
g.fill();

g.beginPath();
g.fillStyle = black;
g.moveTo(650, 500);
g.lineTo(600, 650);
g.lineTo(800, 550);
g.lineTo(800, 350);
g.lineTo(700, 250);
g.lineTo(600, 450);
g.closePath();
g.stroke();
g.fill();