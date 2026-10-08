let inicio_0, inicio_1, inicio_2, inicio_3, inicio_4;

let sola_1, sola_2;
let rangers_1, rangers_2;

let sola_companera_1, sola_companera_2, sola_companera_3;
let sola_pueblo_1, sola_pueblo_2;
let rangers_pueblo_1, rangers_pueblo_2;

let final_rangers_1, final_rangers_2, final_rangers_3, final_rangers_4;
let final_sola_companera_1, final_sola_companera_2, final_sola_companera_3, final_sola_companera_4, final_sola_companera_5;
let final_lider_pueblo_SM_1, final_sola_encuentro_con_villano_SM, final_lider_pueblo_SM_2, final_lider_pueblo_SM_3;
let final_lider_pueblo_CM_1, final_lider_pueblo_CM_2, final_sola_encuentro_con_villano_CM, final_lider_pueblo_CM_3, final_lider_pueblo_CM_4;
let final_rangers_pueblo_SM_1, final_rangers_pueblo_SM_2, final_rangers_pueblo_SM_3, final_rangers_pueblo_SM_4;
let final_rangers_pueblo_CM_1, final_rangers_pueblo_CM_2, final_rangers_pueblo_CM_3, final_rangers_pueblo_CM_4, final_rangers_pueblo_CM_5;

let estado = "inicio_0";

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
  if (reiniciar()) return;
  
  if (pantallas_inicio()) return;
  if (pantallas_primera_decision()) return;
  if (pantallas_segunda_decision()) return;
  if (pantallas_tercera_decision()) return;
}
