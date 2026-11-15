// https://youtu.be/w0UvZ1EYo0M

let data;
let objJuego;

function preload(){
data= new Data();
}
function setup() {
  createCanvas(800, 400);
  objJuego = new juego(data);
}

function draw() {
  objJuego.dibujar();
}

function mouseClicked() {
  objJuego.manejarClic();
}
