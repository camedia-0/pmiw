function dibujar_pantallas (){ 
if (estado === "inicio_0") {
  let frame = animar(portada, portada_cant, 4);
  texto_creditos();
  boton_inicio_play();
  } else if (estado === "inicio_1") {
    image(inicio_1, 0, 0, width, height);
    dibujar_texto('En el año 2042, el meteorito "Apolión" impactó la Tierra con la fuerza de mil bombas atómicas, borrando ciudades enteras y sepultando al mundo bajo una densa nube de ceniza que dio inicio a un invierno nuclear eterno.', 340, true, 12);
 } else if (estado === "inicio_2") {
    image(inicio_2, 0, 0, width, height);
    dibujar_texto('Un siglo después, el polvo se ha asentado para revelar un páramo desértico y hostil, donde el agua vale más que el oro, la radiación ha creado mutaciones letales y los últimos supervivientes resisten el asedio constante de bandas de carroñeros.', 340, true, 12);
  } else if (estado === "inicio_3") {
    image(inicio_3, 0, 0, width, height);
    dibujar_texto('Desde una base espacial en órbita, una facción de élite vigila el planeta, Los Desert Rangers. Su misión es actuar como guardianes globales, preservando la tecnología avanzada y coordinando la reconstrucción de la civilización desde las estrellas bajo el mando firme de la líder de la unidad.', 340, true);
  } else if (estado === "inicio_4") {
    image(inicio_4, 0, 0, width, height);
    dibujar_texto('Un mensaje se interrumpe en la radios, "¿Hola? ¿Hay alguien ahí arriba? Un culto extremista nos tiene acorralados si no nos unimos a ellos, activarán un filtro de líquido tóxico para envenenar toda nuestra agua. No nos queda tiempo, si no nos ayudan, estamos muertos." El mensaje se corta.', 300, false);
    decision_botones("Ir sola", "Ir todo el equipo");

  // Primera decisión
  } else if (estado === "sola_1") {
    image(sola_1, 0, 0, width, height);
    dibujar_texto('Decides descender sola al páramo; el resto del equipo debe quedarse a asegurar la base espacial y tú te niegas a convertirlos en blancos andantes. Aunque las miradas de tus compañeros delatan su desacuerdo, el silencio sella el respeto a tu rango.', 340, true, 12);
  } else if (estado === "sola_2") {
    image(sola_2, 0, 0, width, height);
    dibujar_texto('Tras el aterrizaje, te adentras en el asentamiento, donde el pueblo te recibe compartiendo una cena rústica para planificar el contraataque. Entre el bullicio, el anfitrión se inclina con tono severo: "Ten cuidado si piensas ir sola contra el culto". Sin embargo, las miradas firmes a tu alrededor lo contradicen, el miedo no los ha quebrado y el pueblo entero quiere ayudarte a pelear.', 300, false, 9);
    decision_botones("Ir sola", "Llamar al pueblo");
  } else if (estado === "rangers_1") {
    image(rangers_1, 0, 0, width, height);
    dibujar_texto('Ante la gravedad de la amenaza, decides que la unidad entera descenderá al páramo. Los Desert Rangers coordinan los últimos detalles antes de partir. "Manténganse alertas y tengan mucho cuidado allá abajo, no sabemos a qué nos enfrentamos" los compañeros asienten firmes a tus órdenes.', 340, true);
  } else if (estado === "rangers_2") {
    image(rangers_2, 0, 0, width, height);
    dibujar_texto("Tras un aterrizaje, se adentra en el asentamiento, donde el pueblo los recibe compartiendo una cena rústica para planificar el contraataque. Sentados a la mesa, el anfitrión se inclina y les asegura que hay gente valiente en el lugar dispuesta a ayudar si así lo necesitan. Las miradas firmes a tu alrededor lo confirman, el miedo no los ha quebrado y el pueblo entero quiere pelear.", 300, false, 11);
    decision_botones("Llamar al pueblo", "Ir solos");

  // Segunda decisión
  } else if (estado === "sola_companera_1") {
    image(sola_companera_1, 0, 0, width, height);
    dibujar_texto('De camino a destruir la base enemiga, un golpe brutal te tomó desprevenida y te arrojó al suelo radioactivo. Indefensa, el culto extremista del que habló el pueblo te rodeó por completo. Cuando las dagas se alzaron para terminar el trabajo, un sonido familiar de Ranger interrumpió la ejecución.', 340, true);
  } else if (estado === "sola_companera_2") {
    image(sola_companera_2, 0, 0, width, height);
    dibujar_texto('Tu ayudante más leal irrumpió a fuego limpio para darte una última oportunidad de pelear. Te pusiste en pie de inmediato y ambas barrieron las filas de fanáticos. Superados por la brutal táctica Ranger, los supervivientes del culto soltaron sus armas y huyeron despavoridos.', 340, true);
  } else if (estado === "sola_companera_3") {
    image(sola_companera_3, 0, 0, width, height);
    dibujar_texto('Mientras descansan sentadas entre los escombros, comentás lo sospechosamente simple que fue vencerlos. Ambas coinciden, esos eran solo peones y alguien mucho más fuerte está detrás de todo esto. Con esa inquietud en mente, la Ranger saca su comunicador, lista para llamar al resto en la base espacial.', 300, false);
    decision_botones("Detenerla", "Llamar refuerzos");
  } else if (estado === "sola_pueblo_1") {
    image(sola_pueblo_1, 0, 0, width, height);
    dibujar_texto("Con los más preparados del asentamiento se arman con determinación para ayudarte. Te revelan que saben exactamente dónde está instalado el filtro de agua que deben destruir. Les aseguras que los guiarás y protegerás en el asalto para acabar con la amenaza del culto de una vez por todas.", 340, true);
  } else if (estado === "sola_pueblo_2") {
    image(sola_pueblo_2, 0, 0, width, height);
    dibujar_texto("De camino a la base del culto, se cruzan con mutantes rodeados de fluidos radiactivos, yacen gravemente heridos que, lejos de atacar, suplican por ayuda con sus últimos alientos. El pueblo y tú bajan las armas conmocionados, antes de destruir el filtro, deben decidir qué hacer con estas víctimas del culto.", 300, false);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");
  } else if (estado === "rangers_pueblo_1") {
    image(rangers_pueblo_1, 0, 0, width, height);
    dibujar_texto("Con los más preparados del asentamiento se arman con determinación. El anfitrión te revela que saben exactamente dónde está instalado el filtro de agua que deben destruir. Al ver la urgencia de la situación, les aseguras que los guiarán y que los seis Rangers los protegerán en el asalto para acabar con la amenaza del culto de una vez por todas.", 340, true);
  } else if (estado === "rangers_pueblo_2") {
    image(rangers_pueblo_2, 0, 0, width, height);
    dibujar_texto("De camino a la base del culto, se cruzan con mutantes rodeados de fluidos radiactivos, yacen gravemente heridos que, lejos de atacar, suplican por ayuda con sus últimos alientos.  Los Rangers y el pueblo bajan las armas conmocionados ante la macabra escena, antes de destruir el filtro, deben decidir qué hacer con estas víctimas del culto.", 300, false);
    decision_botones("Seguir de largo", "Ofrecerles ayuda");

  // Tercera decisión (finales)
  } else if (estado === "final_rangers_1") {
    image(final_rangers_1, 0, 0, width, height);
    dibujar_texto("Llegando en absoluto sigilo hasta las imponentes puertas de su fortaleza. Como líder de los Rangers, sentís el peso de la responsabilidad y te carcome el peligro al que estás exponiendo a tus compañeros. Sabiendo que ya no hay marcha atrás, les ordenás tener extremo cuidado antes de dar el siguiente paso.", 340, true);
  } else if (estado === "final_rangers_2") {
    image(final_rangers_2, 0, 0, width, height);
    dibujar_texto("Tras una infiltración perfecta, logran irrumpir en el macabro altar tecnológico. Con las armas cargadas y apuntando directo al trono, arrinconan al líder del culto en medio de sus pantallas de control y tanques radiactivos. El villano los observa con una sonrisa, marcando el inicio del enfrentamiento.", 340, true);
  } else if (estado === "final_rangers_3") {
    image(final_rangers_3, 0, 0, width, height);
    dibujar_texto('El combate termina y logran someter al villano, pero su risa sádica te congela la sangre mientras el caos se desata en las cámaras. Escupe sangre y se burla de tu cara: "Ya es tarde... mis súbditos acaban de activar el filtro". Al ver en los monitores cómo atacan con brutalidad al pueblo y el líquido verde empieza a fluir, clavas tu cuchillo con furia, mientras su última risa moribunda se ahoga en la sala.', 340, true, 9);
  } else if (estado === "final_rangers_4") {
    image(final_rangers_4, 0, 0, width, height);
    dibujar_texto("El cuerpo del villano yace sin vida en el suelo, pero en la pantalla central se confirma que el filtro de agua ha sido activado y el embalse entero queda contaminado. A pesar de haber eliminado al líder del culto, los monitores muestran cómo el veneno se propaga, robándole al pueblo su recurso más vital y sellando una dolorosa derrota para los Rangers.", 300, false);
    reiniciar_boton();
  } else if (estado === "final_sola_companera_1") {
    image(final_sola_companera_1, 0, 0, width, height);
    dibujar_texto('Siguiendo el rastro de los fanáticos que huían, llegamos en absoluto sigilo hasta las imponentes puertas de su fortaleza. Como líder de los Rangers, sentís el peso de la responsabilidad y te carcome el peligro al que estás exponiendo a tu compañera. Sabiendo que ya no hay marcha atrás, le ordenás tener extremo cuidado antes de dar el siguiente paso.', 340, true);
  } else if (estado === "final_sola_companera_2") {
    image(final_sola_companera_2, 0, 0, width, height);
    dibujar_texto("Tras escabullirse con éxito por los pasillos, logran encontrar al villano en su macabro altar tecnológico.", 340, true, 12);
  } else if (estado === "final_sola_companera_3") {
    image(final_sola_companera_3, 0, 0, width, height);
    dibujar_texto("Sin perder un segundo, te lanzas al frente para encararlo cara a cara en su trono, mientras tu compañera va hacia las máquinas al identificar el mecanismo que debe desactivar.", 340, true, 12);
  } else if (estado === "final_sola_companera_4") {
    image(final_sola_companera_4, 0, 0, width, height);
    dibujar_texto("El sistema de filtrado tóxico ha sido desactivado con éxito y el villano yace muerto a tus pies. Sin embargo, la victoria cobra un precio muy alto, te llevas la mano al costado y descubres una herida grave que no deja de sangrar.", 340, true, 12);
  } else if (estado === "final_sola_companera_5") {
    image(final_sola_companera_5, 0, 0, width, height);
    dibujar_texto("El pueblo está a salvo y la amenaza ha terminado, pero tu cuerpo finalmente cede ante el dolor y colapsas. Tu leal compañera cae de rodillas a tu lado, presionando tu herida mientras llora con desesperación, incapaz de creer que la victoria les esté costando la vida de su líder.", 300, false);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_SM_1") {
    image(final_lider_pueblo_SM_1, 0, 0, width, height);
    dibujar_texto("Dejando a los mutantes a su suerte, el pueblo avanza a toda prisa hasta el imponente colosal represa conectada al filtro que brilla con líquido radiactivo. Mientras los civiles toman posiciones, tú te adelantas por el sendero contrario para iniciar el asalto definitivo al culto.", 340, true);
  } else if (estado === "final_sola_encuentro_con_villano_SM") {
    image(final_sola_encuentro_con_villano_SM, 0, 0, width, height);
    dibujar_texto("Te infiltras sola en el corazón del bastión y logras encontrar al verdadero líder del culto en su macabro altar tecnológico. Él te observa con una sonrisa retorcida, tras él se alza el contenedor principal del líquido tóxico, listo para ser liberado si no lo detienes ahora mismo.", 340, true);
  } else if (estado === "final_lider_pueblo_SM_2") {
    image(final_lider_pueblo_SM_2, 0, 0, width, height);
    dibujar_texto("El combate estalla y logras someter al villano en el suelo, su risa sádica te congela la sangre mientras el caos se desata en las cámaras, miras hacia la pantalla gigante, sus súbditos acaban de atacar con brutalidad al pueblo, clavas tu cuchillo con furia, terminando con su vida de una vez por todas. Una última risa sádica resuena en la sala.", 340, true);
  } else if (estado === "final_lider_pueblo_SM_3") {
    image(final_lider_pueblo_SM_3, 0, 0, width, height);
    dibujar_texto("El cuerpo del villano yace sin vida en el suelo, pero no hay tiempo para celebrar. En la pantalla central se confirma que el filtro de agua ha sido destruido y el embalse está a salvo, pero el terreno también está cubierto por una gran cantidad de civiles que dieron su vida combatiendo para asegurar la victoria.", 300, false);
    reiniciar_boton();
  } else if (estado === "final_lider_pueblo_CM_1") {
    image(final_lider_pueblo_CM_1, 0, 0, width, height);
    dibujar_texto("Los mutantes heridos son evacuados la mitad de los civiles se retira para escoltar a los heridos de regreso al pueblo. Mientras tanto, el líder de los mutantes se alza ante ti con sed de venganza, agradecido por la ayuda, promete guiarlos para destruir el filtro de agua y acabar con el culto.", 340, true);
  } else if (estado === "final_lider_pueblo_CM_2") {
    image(final_lider_pueblo_CM_2, 0, 0, width, height);
    dibujar_texto("Guiados por el mutante, el grupo reducido de civiles llega hasta las instalaciones del filtro en la represa. El mutante promete proteger a los civiles mientras destruyen la maquinaria pesada. Con el plan en marcha, te separas y tomas el sendero contrario para iniciar el asalto definitivo al culto.", 340, true);
  } else if (estado === "final_sola_encuentro_con_villano_CM") {
    image(final_sola_encuentro_con_villano_CM, 0, 0, width, height);
    dibujar_texto("Te infiltras sola en el corazón del bastión y logras encontrar al verdadero líder del culto en su macabro altar tecnológico. Él te observa con una sonrisa retorcida, tras él se alza el contenedor principal del líquido tóxico, listo para ser liberado si no lo detienes ahora mismo.", 340, true);
  } else if (estado === "final_lider_pueblo_CM_3") {
    image(final_lider_pueblo_CM_3, 0, 0, width, height);
    dibujar_texto("El combate estalla y logras someter al villano en el suelo, pero su risa sádica te congela la sangre mientras el caos se desata en las cámaras. Miras hacia la pantalla gigante, sus súbditos atacan, pero el mutante emerge destrozando sus filas y protegiendo a los civiles. Clavas tu cuchillo terminando con la vida del villano de una vez por todas.", 340, true);
  } else if (estado === "final_lider_pueblo_CM_4") {
    image(final_lider_pueblo_CM_4, 0, 0, width, height);
    dibujar_texto("El cuerpo del villano yace sin vida en el suelo, de inmediato miras hacia la gran pantalla central. Para tu alivio, el monitor confirma el éxito total, el filtro de agua ha sido destruido y el embalse está a salvo. Junto a los civiles el mutante celebra, gracias a él, el pueblo logró la hazaña sin sufrir ni una sola baja.", 300, false);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_SM_1") {
    image(final_rangers_pueblo_SM_1, 0, 0, width, height);
    dibujar_texto("Dejando a los mutantes a su suerte, el grupo avanza a toda prisa hasta la colosal represa conectada al filtro que brilla con líquido radiactivo. Mientras los civiles toman posiciones junto a la mitad de tus Rangers para asegurar el asalto principal, tú con la otra mitad de tu escuadrón cubriendote las espaldas van listos para infiltrarse y lanzar el ataque definitivo al culto.", 340, true, 9);
  } else if (estado === "final_rangers_pueblo_SM_2") {
    image(final_rangers_pueblo_SM_2, 0, 0, width, height);
    dibujar_texto("Tras una infiltración perfecta, logran irrumpir en el macabro altar tecnológico. Con las armas cargadas y apuntando directo al trono, arrinconan al líder del culto en medio de sus pantallas de control y tanques radiactivos. El villano los observa con una sonrisa, marcando el inicio del enfrentamiento.", 340, true);
  } else if (estado === "final_rangers_pueblo_SM_3") {
    image(final_rangers_pueblo_SM_3, 0, 0, width, height);
    dibujar_texto("El combate termina logran someter al villano, pero su risa sádica te congela la sangre, miran hacia la pantalla gigante. El caos se desata en las cámaras, sus súbditos atacan con brutalidad al pueblo y la otra mitad de tu escuadrón acaban con los súbditos del culto protegiendo a los civiles. Con furia, clavas tu cuchillo terminando con la vida del villano de una vez por todas, mientras su última risa moribunda se ahoga en la sala.", 340, true, 9);
  } else if (estado === "final_rangers_pueblo_SM_4") {
    image(final_rangers_pueblo_SM_4, 0, 0, width, height);
    dibujar_texto("El cuerpo del villano yace sin vida en el suelo, pero no hay tiempo para celebrar. En la pantalla central se confirma que el filtro ha sido destruido y el embalse está a salvo, la otra mitad de tu escuadrón alza sus armas junto a los supervivientes celebrando la victoria, pero el terreno también está cubierto por una gran cantidad de civiles que dieron su vida combatiendo para asegurar la victoria.", 300, false, 9);
    reiniciar_boton();
  } else if (estado === "final_rangers_pueblo_CM_1") {
    image(final_rangers_pueblo_CM_1, 0, 0, width, height);
    dibujar_texto("Los mutantes heridos son evacuados, la mitad de los civiles y la mitad de los Rangers se retiran para escoltar la caravana de regreso al pueblo. El líder de los mutantes se alza con una profunda sed de venganza, agradeciendo por la ayuda, promete guiarlos para destruir el filtro de agua y aniquilar al culto.", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_2") {
    image(final_rangers_pueblo_CM_2, 0, 0, width, height);
    dibujar_texto("Guiados por el mutante, el grupo reducido de civiles con un Ranger llegan hasta las instalaciones del filtro en la represa. El mutante promete proteger a los civiles mientras destruyen la maquinaria pesada. Con el plan en marcha, te separas con una Ranger y toman el sendero contrario para iniciar el asalto definitivo al culto.", 340, true);
  } else if (estado === "final_rangers_pueblo_CM_3") {
    image(final_rangers_pueblo_CM_3, 0, 0, width, height);
    dibujar_texto("Tras escabullirse con éxito por los pasillos, logran encontrar al villano en su macabro altar tecnológico.", 340, true, 12);
  } else if (estado === "final_rangers_pueblo_CM_4") {
    image(final_rangers_pueblo_CM_4, 0, 0, width, height);
    dibujar_texto("El combate estalla y logran someter al villano en el suelo, pero su risa sádica te congela la sangre mientras el caos se desata en las cámaras. Miras hacia la pantalla gigante, sus súbditos atacan, pero el mutante emerge destrozando sus filas y al lado el Ranger ayuda a proteger a los civiles. Clavas tu cuchillo terminando con la vida del villano de una vez por todas.", 340, true, 9);
  } else if (estado === "final_rangers_pueblo_CM_5") {
    image(final_rangers_pueblo_CM_5, 0, 0, width, height);
    dibujar_texto("El cuerpo del villano yace sin vida en el suelo, de inmediato miran hacia la gran pantalla central. Para su alivio, el monitor confirma el éxito total, el filtro de agua ha sido destruido y el embalse está a salvo. Junto a los civiles el mutante celebra, gracias a él, y al Ranger el pueblo logró la hazaña sin sufrir ni una sola baja.", 300, false);
    reiniciar_boton();
  }
}
