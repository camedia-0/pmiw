function pantalla_inicio_play(pantalla_actual, pantalla_siguiente) {
  if (estado === pantalla_actual) {
    if (mouseX > 310 && mouseX < 490 && mouseY > 355 && mouseY < 405) {
      estado = pantalla_siguiente;
      return true;
    }
  }
  return false;
}

function boton_inicio_play(){
  push();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    
    fill(0, 200);
    stroke(255);
    strokeWeight(2);
    rect(400, 380, 180, 50, 10);
    
    fill(255);
    noStroke();
    textSize(20);
    text("JUGAR", 400, 380);
  pop();
}

function pantalla(pantalla_actual, pantalla_siguiente) {
  if (estado === pantalla_actual) {
    if (mouseX > 680 && mouseX < 740 && mouseY > 355 && mouseY < 405) {
      estado = pantalla_siguiente;
      return true;
    }
  }
  return false;
}

function dibujar_texto(texto, y_pos, tiene_boton) {
  push();
    rectMode(CORNER);
    fill(0, 190);
    rect(40, y_pos, 720, 80, 10);
 
    fill(255);
    noStroke();
    textSize(15);
    textAlign(LEFT, TOP);

    if (tiene_boton === true) {
      text(texto, 55, y_pos + 15, 620, 55); 
      fill(255);
      rect(680, y_pos + 15, 60, 50, 6);

      fill(0);
      textSize(22);
      textAlign(CENTER, CENTER);
      text("→", 710, y_pos + 38);
    } else {
      text(texto, 55, y_pos + 15, 690, 55);
    }
  pop();
}

function decision_botones(texto_a, texto_b) {
  push();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(15);
  
    fill(0, 200);
    stroke(255);
    rect(250, 410, 200, 32, 8);
    fill(255);
    noStroke();
    text(texto_a, 250, 410);
  
    fill(0, 200);
    stroke(255);
    rect(550, 410, 200, 32, 8);
    fill(255);
    noStroke();
    text(texto_b, 550, 410);
  pop();
}

function reiniciar_boton() {
  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(15);

  fill(0, 200);
  stroke(255);
  rect(400, 410, 200, 32, 8);
  fill(255);
  noStroke();
  text("reiniciar", 400, 410);
  pop();
}

function decision(pantalla_actual, decision_A, decision_B) {
  if (estado === pantalla_actual) {
    if (mouseX > 150 && mouseX < 350 && mouseY > 394 && mouseY < 426) {
      estado = decision_A;
      return true;
    }
    if (mouseX > 450 && mouseX < 650 && mouseY > 394 && mouseY < 426) {
      estado = decision_B;
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
    if (mouseX > 300 && mouseX < 500 && mouseY > 394 && mouseY < 426) {
      estado = "inicio_0";
      return true;
    }
  }
  return false;
}
