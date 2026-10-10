function animar(frames, frames_cant, velocidad){
  let frame = floor(frame_animacion / velocidad) % frames_cant;
  image(frames[frame], 0, 0, width, height);
  frame_animacion++;
  return frame;
}

function texto_creditos(){
 push();
  textFont(tipografia);
  fill(255);
  noStroke();
  textSize(12);
  
  textAlign(LEFT);
  text("PMIW", 20, 395);
  text("Docente:", 20, 407)
  text("Leonardo Garay", 20, 422);
  
  textAlign(RIGHT);
  text("Creado por:", 780, 395);
  text("Nahuel Villarubia Piuca", 780, 410);
  text("Camila Iara Salcedo", 780, 422);
 pop();
}

function pantalla_inicio_play(pantalla_actual, pantalla_siguiente) {
  if (estado === pantalla_actual) {
    if (mouseX > 310 && mouseX < 490 && mouseY > 355 && mouseY < 405) {
      if (!musica_fondo.isPlaying()) {
        musica_fondo.setVolume(0.3);
        musica_fondo.loop();
      }

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
    
    textFont(tipografia);
    fill(255);
    noStroke();
    textSize(20);
    text("EMPEZAR", 400, 380);
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

function dibujar_texto(texto, y_pos, tiene_boton, tam = 11) {
  push();
    rectMode(CORNER);
    fill(0, 190);
    stroke(120);
    rect(40, y_pos, 720, 80, 10);
    
    textFont(tipografia);
    fill(255);
    textSize(tam);
    textAlign(LEFT, TOP);

    if (tiene_boton === true) {
      text(texto, 55, y_pos + 15, 620, 55); 
      fill(160);
      rect(685, y_pos + 15, 50, 50);
      image(flecha, 695, y_pos+25, 30, 30);
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
    
    textFont(tipografia);
    fill(0, 200);
    stroke(120);
    rect(250, 410, 200, 32, 8);
    fill(255);
    noStroke();
    text(texto_a, 250, 410);
  
    fill(0, 200);
    stroke(120);
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
  
  textFont(tipografia);
  fill(0, 200);
  stroke(255);
  rect(400, 410, 200, 32, 8);
  fill(255);
  noStroke();
  text("REINICIAR", 400, 410);
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
