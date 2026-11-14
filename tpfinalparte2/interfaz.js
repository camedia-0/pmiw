class Interfaz {
  constructor() {
    this.btnInicioX = 610;
    this.btnInicioY = 200;
    this.btnInicioTamX = 180;
    this.btnInicioTamY = 70;

    this.btnReinicioX = 400;
    this.btnReinicioY = 240;
    this.btnReinicioTamX = 160;
    this.btnReinicioTamY = 45;
  }

  dibujarPantallaInicio() {
    noStroke();
    fill(255, 255, 255, 180);
    rectMode(CORNER);
    rect(0, 0, width, height);
    
    rectMode(CENTER);
    fill(40, 50, 40);
    rect(400, 200, 720, 220);

    textFont(data.StickNoBills); 
    textAlign(LEFT, CENTER);
    fill(200, 245, 200);
    textSize(36);
    text("RADIO DEFENSE", 70, 140);

    fill(245);
    textSize(14);
    let txtInstrucciones_0 = "– Defendé a la líder mientras repara la radio –";
    let txtInstrucciones_1 = "Usá las flechas del teclado para mover el escudo";
    let txtInstrucciones_2 = "Bloquea los proyectiles del culto para no perder vidas (5 Vidas)";
    let txtInstrucciones_3 = "Llegá al 100% de la reparación para llamar a los refuerzos.";
    textFont(data.Quantico);
    text(txtInstrucciones_0, 70, 160+20);
    text(txtInstrucciones_1, 70, 180+20);
    text(txtInstrucciones_2, 70, 195+20);
    text(txtInstrucciones_3, 70, 210+20);

    fill(180);
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text("Estudiantes: Nahuel Villarrubia Piuca y Camila Salcedo", 70, 280);

    rectMode(CENTER);
    fill(200, 245, 200);
    rect(this.btnInicioX+2, this.btnInicioY+2, this.btnInicioTamX+2, this.btnInicioTamY+2);
    fill(0, 10, 0);
    rect(this.btnInicioX, this.btnInicioY, this.btnInicioTamX, this.btnInicioTamY);
    
    textFont(data.StickNoBills);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("JUGAR", this.btnInicioX, this.btnInicioY);
  }

  dibujarHUD(ronda, progreso, vida) {
    textFont(data.Quantico);
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP);
    text("Progreso Radio: " + progreso + "%", 770, 30);
    textAlign(LEFT, TOP);
    text("Vidas Líder: " + vida, 30, 30);
  }

  dibujarCartelFin(resultado) {
    noStroke();
    fill(0, 100);
    rectMode(CORNER);
    rect(0, 0, width, height);

    rectMode(CENTER);
    fill(40, 50, 40, 200);
    rect(400, 200, 320, 180);

    textFont(data.Quantico);
    textAlign(CENTER, CENTER);
    textSize(38);
    
    if (resultado === "VICTORIA") {
      textFont(data.StickNoBills);
      fill(200, 255, 200);
      text("VICTORIA", 400, 150);
      textFont(data.Quantico);
      textSize(16);
      text("Radio reparada! Refuerzos en camino.", 400, 190);
    } else {
      textFont(data.StickNoBills);
      fill(200, 255, 200);
      text("DERROTA", 400, 150);
      textFont(data.Quantico);
      textSize(16);
      text("La líder cayó. Retirada!", 400, 190);
    }
    rect(this.btnReinicioX, this.btnReinicioY, this.btnReinicioTamX, this.btnReinicioTamY);
    textFont(data.StickNoBills);
    fill(0, 40, 0);
    textSize(24);
    text("REINICIAR", this.btnReinicioX, this.btnReinicioY);
  }

  clicEnBotonInicio() {
    return (mouseX > 520 && mouseX < 700 && mouseY > 175 && mouseY < 225);
  }

  clicEnBotonReinicio() {
    return (mouseX > 320 && mouseX < 480 && mouseY > 217 && mouseY < 262);
  }
}
