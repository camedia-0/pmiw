function dibujar_pantallas (){
if (estado === "inicio_1") {
  //Inicio
    image(inicio_1, 0, 0, width, height);
  } else if (estado === "inicio_2") {
    image(inicio_2, 0, 0, width, height);
    decision_botones("Ir sola", "Ir junto al grupo");

  // Primera decisión
  } else if (estado === "sola_nave_1") {
    image(sola_nave_1, 0, 0, width, height);
  } else if (estado === "sola_nave_2") {
    image(sola_nave_2, 0, 0, width, height);
  } else if (estado === "sola_nave_3") {
    image(sola_nave_3, 0, 0, width, height);
    decision_botones("Ir sola", "Llamar al pueblo");
  } else if (estado === "rangers_1") {
    image(rangers_1, 0, 0, width, height);
  } else if (estado === "rangers_2") {
    image(rangers_2, 0, 0, width, height);
  } else if (estado === "rangers_3") {
    image(rangers_3, 0, 0, width, height);
    decision_botones("Llamar al pueblo", "Ir solos");

  // Segunda decisión
  } else if (estado === "sola_pelea_1") {
    image(sola_pelea_1, 0, 0, width, height);
  } else if (estado === "sola_pelea_2") {
    image(sola_pelea_2, 0, 0, width, height);
  } else if (estado === "sola_pelea_3") {
    image(sola_pelea_3, 0, 0, width, height);
  } else if (estado === "sola_pelea_4") {
    image(sola_pelea_4, 0, 0, width, height);
    decision_botones("Detenerla", "Llamar refuerzos");
  } else if (estado === "sola_pueblo_1") {
    image(sola_pueblo_1, 0, 0, width, height);
  } else if (estado === "sola_pueblo_2") {
    image(sola_pueblo_2, 0, 0, width, height);
  } else if (estado === "sola_pueblo_3") {
    image(sola_pueblo_3, 0, 0, width, height);
  } else if (estado === "sola_pueblo_4") {
    image(sola_pueblo_4, 0, 0, width, height);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");
  } else if (estado === "rangers_pueblo_1") {
    image(rangers_pueblo_1, 0, 0, width, height);
  } else if (estado === "rangers_pueblo_2") {
    image(rangers_pueblo_2, 0, 0, width, height);
  } else if (estado === "rangers_pueblo_3") {
    image(rangers_pueblo_3, 0, 0, width, height);
  } else if (estado === "rangers_pueblo_4") {
    image(rangers_pueblo_4, 0, 0, width, height);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");

  // Tercera decisión (finales)
  } else if (estado === "final_rangers_0") {
    image(final_rangers_0, 0, 0, width, height);
  } else if (estado === "final_rangers_1") {
    image(final_rangers_1, 0, 0, width, height);
  } else if (estado === "final_rangers_2") {
    image(final_rangers_2, 0, 0, width, height);
  } else if (estado === "final_rangers_3") {
    image(final_rangers_3, 0, 0, width, height);
  } else if (estado === "final_rangers_4") {
    image(final_rangers_4, 0, 0, width, height);
  } else if (estado === "final_rangers_5") {
    image(final_rangers_5, 0, 0, width, height);
    reiniciar_boton();
  } else if (estado === "final_sola_1") {
    image(final_sola_1, 0, 0, width, height);
  } else if (estado === "final_sola_2") {
    image(final_sola_2, 0, 0, width, height);
  } else if (estado === "final_sola_3") {
    image(final_sola_3, 0, 0, width, height);
  } else if (estado === "final_sola_4") {
    image(final_sola_4, 0, 0, width, height);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_SM_1") {
    image(final_lider_pueblo_SM_1, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_SM_2") {
    image(final_lider_pueblo_SM_2, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_SM_3") {
    image(final_lider_pueblo_SM_3, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_SM_4") {
    image(final_lider_pueblo_SM_4, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_SM_5") {
    image(final_lider_pueblo_SM_5, 0, 0, width, height);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_CM_1") {
    image(final_lider_pueblo_CM_1, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_CM_2") {
    image(final_lider_pueblo_CM_2, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_CM_3") {
    image(final_lider_pueblo_CM_3, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_CM_4") {
    image(final_lider_pueblo_CM_4, 0, 0, width, height);
  } else if (estado === "final_lider_pueblo_CM_5") {
    image(final_lider_pueblo_CM_5, 0, 0, width, height);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_SM_1") {
    image(final_rangers_pueblo_SM_1, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_SM_2") {
    image(final_rangers_pueblo_SM_2, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_SM_3") {
    image(final_rangers_pueblo_SM_3, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_SM_4") {
    image(final_rangers_pueblo_SM_4, 0, 0, width, height);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_CM_1") {
    image(final_rangers_pueblo_CM_1, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_CM_2") {
    image(final_rangers_pueblo_CM_2, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_CM_3") {
    image(final_rangers_pueblo_CM_3, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_CM_4") {
    image(final_rangers_pueblo_CM_4, 0, 0, width, height);
  } else if (estado === "final_rangers_pueblo_CM_5") {
    image(final_rangers_pueblo_CM_5, 0, 0, width, height);
    reiniciar_boton();
  }
}
