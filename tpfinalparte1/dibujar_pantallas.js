function dibujar_pantallas (){
if (estado === "inicio_0") {
  //Inicio
    image(inicio_0, 0, 0, width, height);
    boton_inicio_play();
  } else if (estado === "inicio_1") {
    image(inicio_1, 0, 0, width, height);
    dibujar_texto("Llegaste al planeta desconocido. El radar detecta una extraña señal de auxilio proveniente de las montañas distantes.", 340, true);
 } else if (estado === "inicio_2") {
    image(inicio_2, 0, 0, width, height);
    dibujar_texto("Llegaste al planeta desconocido.", 340, true);
  } else if (estado === "inicio_3") {
    image(inicio_3, 0, 0, width, height);
    dibujar_texto("El equipo debate qué hacer. La nave tiene combustible limitado y explorar la zona podría ser peligroso.", 340, true);
  } else if (estado === "inicio_4") {
    image(inicio_4, 0, 0, width, height);
    dibujar_texto("El camino se divide. ¿Prefieres adentrarte sola en las ruinas o avanzar en grupo con los demás?", 300, false);
    decision_botones("Ir sola", "Ir junto al grupo");

  // Primera decisión
  } else if (estado === "sola_1") {
    image(sola_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "sola_2") {
    image(sola_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    decision_botones("Ir sola", "Llamar al pueblo");
  } else if (estado === "rangers_1") {
    image(rangers_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "rangers_2") {
    image(rangers_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    decision_botones("Llamar al pueblo", "Ir solos");

  // Segunda decisión
  } else if (estado === "sola_companera_1") {
    image(sola_companera_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "sola_companera_2") {
    image(sola_companera_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "sola_companera_3") {
    image(sola_companera_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    decision_botones("Detenerla", "Llamar refuerzos");
  } else if (estado === "sola_pueblo_1") {
    image(sola_pueblo_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "sola_pueblo_2") {
    image(sola_pueblo_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");
  } else if (estado === "rangers_pueblo_1") {
    image(rangers_pueblo_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "rangers_pueblo_2") {
    image(rangers_pueblo_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");

  // Tercera decisión (finales)
  } else if (estado === "final_rangers_1") {
    image(final_rangers_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_2") {
    image(final_rangers_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_3") {
    image(final_rangers_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_4") {
    image(final_rangers_4, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  } else if (estado === "final_sola_companera_1") {
    image(final_sola_companera_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_companera_2") {
    image(final_sola_companera_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_companera_3") {
    image(final_sola_companera_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_companera_4") {
    image(final_sola_companera_4, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_companera_5") {
    image(final_sola_companera_5, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_SM_1") {
    image(final_lider_pueblo_SM_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_encuentro_con_villano_SM") {
    image(final_sola_encuentro_con_villano_SM, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_lider_pueblo_SM_2") {
    image(final_lider_pueblo_SM_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_lider_pueblo_SM_3") {
    image(final_lider_pueblo_SM_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_CM_1") {
    image(final_lider_pueblo_CM_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_lider_pueblo_CM_2") {
    image(final_lider_pueblo_CM_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_sola_encuentro_con_villano_CM") {
    image(final_sola_encuentro_con_villano_CM, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_lider_pueblo_CM_3") {
    image(final_lider_pueblo_CM_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_lider_pueblo_CM_4") {
    image(final_lider_pueblo_CM_4, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_SM_1") {
    image(final_rangers_pueblo_SM_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_SM_2") {
    image(final_rangers_pueblo_SM_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_SM_3") {
    image(final_rangers_pueblo_SM_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_SM_4") {
    image(final_rangers_pueblo_SM_4, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_CM_1") {
    image(final_rangers_pueblo_CM_1, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_2") {
    image(final_rangers_pueblo_CM_2, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_3") {
    image(final_rangers_pueblo_CM_3, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_4") {
    image(final_rangers_pueblo_CM_4, 0, 0, width, height);
    dibujar_texto("Placeholder", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_5") {
    image(final_rangers_pueblo_CM_5, 0, 0, width, height);
    dibujar_texto("Placeholder", 300, false);
    reiniciar_boton();
  }
}
