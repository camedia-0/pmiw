function pantallas_inicio(){
  if (pantalla("inicio_1", "inicio_2")) return;
  if (decision("inicio_2", "sola_nave_1", "rangers_1")) return;
}

function pantallas_primera_decision(){
  if (pantalla("sola_nave_1", "sola_nave_2")) return;
  if (pantalla("sola_nave_2", "sola_nave_3")) return;
  if (decision("sola_nave_3", "sola_pelea_1", "sola_pueblo_1")) return;
  if (pantalla("rangers_1", "rangers_2")) return;
  if (pantalla("rangers_2", "rangers_3")) return;
  if (decision("rangers_3", "rangers_pueblo_1", "final_rangers_1")) return;
}

function pantallas_segunda_decision(){
  if (pantalla("sola_pelea_1", "sola_pelea_2")) return;
  if (pantalla("sola_pelea_2", "sola_pelea_3")) return;
  if (pantalla("sola_pelea_3", "sola_pelea_4")) return;
  if (decision("sola_pelea_4", "final_sola_1", "final_rangers_0")) return;
  if (pantalla("sola_pueblo_1", "sola_pueblo_2")) return;
  if (pantalla("sola_pueblo_2", "sola_pueblo_3")) return;
  if (pantalla("sola_pueblo_3", "sola_pueblo_4")) return;
  if (decision("sola_pueblo_4", "final_lider_pueblo_SM_1", "final_lider_pueblo_CM_1")) return;
  if (pantalla("rangers_pueblo_1", "rangers_pueblo_2")) return;
  if (pantalla("rangers_pueblo_2", "rangers_pueblo_3")) return;
  if (pantalla("rangers_pueblo_3", "rangers_pueblo_4")) return;
  if (decision("rangers_pueblo_4", "final_rangers_pueblo_SM_1", "final_rangers_pueblo_CM_1")) return
}

function pantallas_tercera_decision(){
  if (pantalla("final_rangers_0", "final_rangers_1")) return;
  if (pantalla("final_rangers_1", "final_rangers_2")) return;
  if (pantalla("final_rangers_2", "final_rangers_3")) return;
  if (pantalla("final_rangers_3", "final_rangers_4")) return;
  if (pantalla("final_rangers_4", "final_rangers_5")) return;
  if (pantalla("final_sola_1", "final_sola_2")) return;
  if (pantalla("final_sola_2", "final_sola_3")) return;
  if (pantalla("final_sola_3", "final_sola_4")) return;
  if (pantalla("final_lider_pueblo_SM_1", "final_lider_pueblo_SM_2")) return;
  if (pantalla("final_lider_pueblo_SM_2", "final_lider_pueblo_SM_3")) return;
  if (pantalla("final_lider_pueblo_SM_3", "final_lider_pueblo_SM_4")) return;
  if (pantalla("final_lider_pueblo_SM_4", "final_lider_pueblo_SM_5")) return;
  if (pantalla("final_lider_pueblo_CM_1", "final_lider_pueblo_CM_2")) return;
  if (pantalla("final_lider_pueblo_CM_2", "final_lider_pueblo_CM_3")) return;
  if (pantalla("final_lider_pueblo_CM_3", "final_lider_pueblo_CM_4")) return;
  if (pantalla("final_lider_pueblo_CM_4", "final_lider_pueblo_CM_5")) return;
  if (pantalla("final_rangers_pueblo_SM_1", "final_rangers_pueblo_SM_2")) return;
  if (pantalla("final_rangers_pueblo_SM_2", "final_rangers_pueblo_SM_3")) return;
  if (pantalla("final_rangers_pueblo_SM_3", "final_rangers_pueblo_SM_4")) return;
  if (pantalla("final_rangers_pueblo_CM_1", "final_rangers_pueblo_CM_2")) return;
  if (pantalla("final_rangers_pueblo_CM_2", "final_rangers_pueblo_CM_3")) return;
  if (pantalla("final_rangers_pueblo_CM_3", "final_rangers_pueblo_CM_4")) return;
  if (pantalla("final_rangers_pueblo_CM_4", "final_rangers_pueblo_CM_5")) return;
}
