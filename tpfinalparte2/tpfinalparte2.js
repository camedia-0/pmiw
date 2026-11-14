// link de video acá :P

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
