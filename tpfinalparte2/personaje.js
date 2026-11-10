class personaje{
  constructor(){
  this.posX = 400;
  this.posY = 200;
  this.radio = 0;
  this.vida = 5;
  }
  
  dibujar(){
    rectMode(CENTER);
    fill(0, 0, 255);
    rect(this.posX, this.posY, 50, 50);
  }
  
  dañoRecibido(){
    this.vida--;
    if (this.vida <= 0) {
      print("¡Game Over / Derrota!");
    }
  }
}
