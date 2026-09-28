function pantallas_inicio(){
  if (pantalla("inicio_1", "inicio_2")) return true;
  if (pantalla("inicio_2", "inicio_3")) return true;
  if (pantalla("inicio_3", "inicio_4")) return true;
  if (decision("inicio_4", "sola_1", "rangers_1")) return true;
  return false;
}

function pantallas_primera_decision(){
  if (pantalla("sola_1", "sola_2")) return true;
  if (decision("sola_2", "sola_companera_1", "sola_pueblo_1")) return true;
  if (pantalla("rangers_1", "rangers_2")) return true;
  if (decision("rangers_2", "rangers_pueblo_1", "final_rangers_1")) return true;
  return false;
}

function pantallas_segunda_decision(){
  if (pantalla("sola_companera_1", "sola_companera_2")) return true;
  if (pantalla("sola_companera_2", "sola_companera_3")) return true;
  if (decision("sola_companera_3", "final_sola_companera_1", "final_rangers_1")) return true;
  if (pantalla("sola_pueblo_1", "sola_pueblo_2")) return true;
  if (decision("sola_pueblo_2", "final_lider_pueblo_SM_1", "final_lider_pueblo_CM_1")) return true;
  if (pantalla("rangers_pueblo_1", "rangers_pueblo_2")) return true;
  if (pantalla("rangers_pueblo_2", "rangers_pueblo_3")) return true;
  if (decision("rangers_pueblo_3", "final_rangers_pueblo_SM_1", "final_rangers_pueblo_CM_1")) return true;
  return false;
}

function pantallas_tercera_decision(){
  if (pantalla("final_rangers_1", "final_rangers_2")) return true;
  if (pantalla("final_rangers_2", "final_rangers_3")) return true;
  if (pantalla("final_rangers_3", "final_rangers_4")) return true;
  if (pantalla("final_sola_companera_1", "final_sola_companera_2")) return true;
  if (pantalla("final_sola_companera_2", "final_sola_companera_3")) return true;
  if (pantalla("final_sola_companera_3", "final_sola_companera_4")) return true;
  if (pantalla("final_sola_companera_4", "final_sola_companera_5")) return true;
  if (pantalla("final_lider_pueblo_SM_1", "final_lider_pueblo_SM_2")) return true;
  if (pantalla("final_lider_pueblo_SM_2", "final_lider_pueblo_SM_3")) return true;
  if (pantalla("final_lider_pueblo_CM_1", "final_lider_pueblo_CM_2")) return true;
  if (pantalla("final_lider_pueblo_CM_2", "final_lider_pueblo_CM_3")) return true;
  if (pantalla("final_lider_pueblo_CM_3", "final_lider_pueblo_CM_4")) return true;
  if (pantalla("final_rangers_pueblo_SM_1", "final_rangers_pueblo_SM_2")) return true;
  if (pantalla("final_rangers_pueblo_SM_2", "final_rangers_pueblo_SM_3")) return true;
  if (pantalla("final_rangers_pueblo_SM_3", "final_rangers_pueblo_SM_4")) return true;
  if (pantalla("final_rangers_pueblo_CM_1", "final_rangers_pueblo_CM_2")) return true;
  if (pantalla("final_rangers_pueblo_CM_2", "final_rangers_pueblo_CM_3")) return true;
  if (pantalla("final_rangers_pueblo_CM_3", "final_rangers_pueblo_CM_4")) return true;
  if (pantalla("final_rangers_pueblo_CM_4", "final_rangers_pueblo_CM_5")) return true;
  return false;
}
