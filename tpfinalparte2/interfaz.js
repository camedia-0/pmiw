class Interfaz {
  constructor() {
    this.btnInicioX = 610;
    this.btnInicioY = 200;
    this.btnInicioTamX = 180;
    this.btnInicioTamY = 50;

    this.btnReinicioX = 400;
    this.btnReinicioY = 240;
    this.btnReinicioTamX = 160;
    this.btnReinicioTamY = 45;
  }

  dibujarPantallaInicio() {
    noStroke();
    fill(0, 0, 0, 180);
    rectMode(CORNER);
    rect(0, 0, width, height);
    
    rectMode(CENTER);
    fill(245);
    rect(400, 200, 720, 220);

    textAlign(LEFT, CENTER);
    fill(20);
    textSize(24);
    text("RADIO DEFENSE", 70, 140);

    fill(60);
    textSize(14);
    let txtInstrucciones_0 = "– Defendé a la líder mientras repara la radio –";
    let txtInstrucciones_1 = "Usá las flechas del teclado (↑ ↓ ← →) para mover el escudo";
    let txtInstrucciones_2 = "Bloquea los proyectiles del culto para no perder vidas (5 Vidas)";
    let txtInstrucciones_3 = "Llegá al 100% de la reparación para llamar a los refuerzos.";
    text(txtInstrucciones_0, 70, 160+20);
    text(txtInstrucciones_1, 70, 180+20);
    text(txtInstrucciones_2, 70, 195+20);
    text(txtInstrucciones_3, 70, 210+20);

    fill(100);
    textSize(12);
    textAlign(LEFT, BOTTOM);
    text("Estudiantes: Nahuel Villarrubia Pura y Camila Salcedo", 70, 280);

    rectMode(CENTER);
    fill(60);
    rect(this.btnInicioX, this.btnInicioY, this.btnInicioTamX, this.btnInicioTamY);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("JUGAR", this.btnInicioX, this.btnInicioY);
  }

  dibujarHUD(ronda, progreso, vida) {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Ronda: " + ronda, 20, 20);
    text("Progreso Radio: " + progreso + "%", 20, 45);
    text("Vidas Líder: " + vida, 20, 70);
  }

  dibujarCartelFin(resultado) {
    noStroke();
    fill(0, 0, 0, 180);
    rectMode(CORNER);
    rect(0, 0, width, height);

    rectMode(CENTER);
    fill(255);
    rect(400, 200, 320, 180);

    textAlign(CENTER, CENTER);
    textSize(32);
    
    if (resultado === "VICTORIA") {
      fill(50);
      text("VICTORIA", 400, 160);
      textSize(16);
      text("Radio reparada! Refuerzos en camino.", 400, 200);
    } else {
      fill(50);
      text("DERROTA", 400, 160);
      textSize(16);
      text("La líder cayó. Retirada!", 400, 200);
    }
    rect(this.btnReinicioX, this.btnReinicioY, this.btnReinicioTamX, this.btnReinicioTamY);
    fill(255);
    textSize(18);
    text("REINICIAR", this.btnReinicioX, this.btnReinicioY);
  }

  clicEnBotonInicio() {
    return (mouseX > 520 && mouseX < 700 && mouseY > 175 && mouseY < 225);
  }

  clicEnBotonReinicio() {
    return (mouseX > 320 && mouseX < 480 && mouseY > 217 && mouseY < 262);
  }
}
