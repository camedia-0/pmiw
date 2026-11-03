// link de video acá :P

let objJuego;

function setup() {
createCanvas(800, 400);
objJuego = new juego();
}


function draw() {
background(200);
objJuego.dibujar();
}
