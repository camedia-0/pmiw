class personaje {
  constructor(data) {
    this.data = data;
    this.posX = 400;
    this.posY = 200;
    this.vida = 5;
  }
  
  dibujar(estadoJuego) {
    imageMode(CENTER);
    
    if (estadoJuego === "VICTORIA") {
      image(this.data.liderVictoria, this.posX, this.posY, 70, 103);
    } 
    else if (this.vida <= 0) {
      image(this.data.liderSinVida, this.posX, this.posY, 90, 60);
    } 
    else if (this.vida === 1) {
      image(this.data.lider1Vida, this.posX, this.posY, 70, 103);
    } 
    else if (this.vida <= 3) {
      image(this.data.lider3Vidas, this.posX, this.posY, 70, 103);
    } 
    else {
      image(this.data.liderNormal, this.posX, this.posY, 70, 103);
    }
  }
  
  dañoRecibido() {
    this.vida--;
    this.data.sfxHit.play();
  }
}
