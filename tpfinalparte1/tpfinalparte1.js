let inicio_1, inicio_2;

let sola_nave_1, sola_nave_2, sola_nave_3;
let rangers_1, rangers_2, rangers_3;

let sola_pelea_1, sola_pelea_2, sola_pelea_3, sola_pelea_4;
let sola_pueblo_1, sola_pueblo_2, sola_pueblo_3, sola_pueblo_4;
let rangers_pueblo_1, rangers_pueblo_2, rangers_pueblo_3, rangers_pueblo_4;

let final_rangers_0, final_rangers_1, final_rangers_2, final_rangers_3, final_rangers_4, final_rangers_5;
let final_sola_1, final_sola_2, final_sola_3, final_sola_4;
let final_lider_pueblo_SM_1, final_lider_pueblo_SM_2, final_lider_pueblo_SM_3, final_lider_pueblo_SM_4, final_lider_pueblo_SM_5;
let final_lider_pueblo_CM_1, final_lider_pueblo_CM_2, final_lider_pueblo_CM_3, final_lider_pueblo_CM_4, final_lider_pueblo_CM_5;
let final_rangers_pueblo_SM_1, final_rangers_pueblo_SM_2, final_rangers_pueblo_SM_3, final_rangers_pueblo_SM_4;
let final_rangers_pueblo_CM_1, final_rangers_pueblo_CM_2, final_rangers_pueblo_CM_3, final_rangers_pueblo_CM_4, final_rangers_pueblo_CM_5;

let estado = "inicio_1";

function preload(){
  precargar();
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  dibujar_pantallas();
}

function mouseClicked() {
  if(reiniciar())return;  
  pantallas_inicio();
  pantallas_primera_decision();
  pantallas_segunda_decision();
  pantallas_tercera_decision();
}
