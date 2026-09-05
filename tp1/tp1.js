let fondo;
let nubes;
let nubes_1_x = 50;
let nubes_2_x = 850;
let props;
let logo;
let logo_y = -100;
let texto;
let texto_y = -120;
let alpha = 0;

let reiniciarTF = "NORMAL";

let tam = 2;

let frame_animacion = 0;
let velocidadAnimacion_1 = 10;
let velocidadAnimacion_2 = 6;

let estado_personaje = "SLEEP";

let sleep = [];
let awake = [];
let idle = [];
let infecting = [];
let infected = [];
let worm = [];

let sleep_cant = 7;
let awake_cant = 4;
let idle_cant = 6;
let infecting_cant = 34;
let infected_cant = 11;
let worm_cant = 11;

let sleep_tiempo = 0;
let awake_tiempo = 0;
let idle_tiempo = 0;
let infecting_tiempo = 0;
let infected_tiempo = 0;
let worm_tiempo = 0;
let final_tiempo = 0;

let infected_x = 405;
let worm_x = 710;
let worm_y = 272;

function preload(){
  precargar();
}

function setup() {
  createCanvas(800, 600);
  background(100);
}

function draw() {  
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  image(nubes, nubes_1_x, 0, width, height);
  image(nubes, nubes_2_x, -80, width, height);
    if(nubes_1_x > -width){
    nubes_1_x = nubes_1_x - 0.5;
    nubes_2_x = nubes_2_x - 0.5;
    }
    if (nubes_1_x <= -width){
    nubes_1_x = width;
    }
    if (nubes_2_x <= -width){
    nubes_2_x = width;
    }
  image(props, 0, 0, width, height);
  imageMode(CENTER);
  logo_final();
  
  estado_worm();
  worm_tiempo++;
  
  if(estado_personaje == "SLEEP"){
  estado_sleep();
  } else if(estado_personaje == "AWAKE"){
  estado_awake();
  } else if(estado_personaje == "IDLE"){
  estado_idle();
  } else if(estado_personaje == "INFECTING"){
  estado_infecting();
  } else if(estado_personaje == "INFECTED"){
  estado_infected();
  }
  
  if (reiniciarTF == "TRANSICION_1"){
    if (alpha < 255) {
    alpha = alpha + 5;
    fill(0, alpha);
    rect(0, 0, width, height);
    } else if (alpha <= 255){
    reiniciar_variables();  
    }
  }
  
  if (reiniciarTF == "TRANSICION_2"){
    if (alpha > 0) {
    alpha = alpha - 5;
    fill(0, alpha);
    rect(0, 0, width, height);
    } else if(alpha >= 0){
    reiniciarTF = "NORMAL";
    }
  }
}
  

function keyPressed(){
  if(key === 'r' || key === 'R'){
  reiniciarTF = "TRANSICION_1";
  }
}

function reiniciar_variables(){
  nubes_1_x = 50;
  nubes_2_x = 650;
  logo_y = -100;
  texto_y = -120;
  
  estado_personaje = "SLEEP";
  
  frame_animacion = 0;
  
  sleep_tiempo = 0;
  awake_tiempo = 0;
  idle_tiempo = 0;
  infecting_tiempo = 0;
  infected_tiempo = 0;
  worm_tiempo = 0;
  final_tiempo = 0;
  
  infected_x = 405;
  worm_x = 710;
  worm_y = 272;
  
  reiniciarTF = "TRANSICION_2";
}
