function pantalla(pantalla_actual, pantalla_siguiente) {
  if (estado === pantalla_actual) {
    estado = pantalla_siguiente;
    return true;
  }
  return false;
}

function decision(pantalla_actual, decision_A, decision_D) {
  if (estado === pantalla_actual) {
    if (mouseX > 150 && mouseX < 350 && mouseY > 355 && mouseY < 405) {
      estado = decision_A;
      return true;
    }
    if (mouseX > 450 && mouseX < 650 && mouseY > 355 && mouseY < 405) {
      estado = decision_D;
      return true;
    }
  }
  return false;
}

function reiniciar(){
  if (estado === "final_sola_companera_5" ||
      estado === "final_lider_pueblo_SM_3" ||
      estado === "final_lider_pueblo_CM_4" ||
      estado === "final_rangers_pueblo_CM_5" ||
      estado === "final_rangers_pueblo_SM_4" ||
      estado === "final_rangers_4") {
    if (mouseX > 300 && mouseX < 500 && mouseY > 355 && mouseY < 405) {
      estado = "inicio_1";
      return true;
    }
  }
  return false;
}

function decision_botones(texto_a, texto_b) {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);

  fill(0, 150);
  stroke(255);
  rect(250, 380, 200, 50, 10);
  fill(255);
  noStroke();
  text(texto_a, 250, 380);

  fill(0, 150);
  stroke(255);
  rect(550, 380, 200, 50, 10);
  fill(255);
  noStroke();
  text(texto_b, 550, 380);
}

function reiniciar_boton() {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);

  fill(0, 150);
  stroke(255);
  rect(400, 380, 200, 50, 10);
  fill(255);
  noStroke();
  text("reiniciar", 400, 380);
}
