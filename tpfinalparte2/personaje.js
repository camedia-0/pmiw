class personaje{
  constructor(){
  this.posX = 400;
  this.posY = 200;
  this.radio = 0;
  this.vida = 100;
  }
  
  dibujar(){
    rectMode(CENTER);
     fill(0, 0, 255);
    rect(this.posX, this.posY, 50, 50);
  }
  
  dañoRecibido(){
  }
  
  morir(){
  }
  
  reparar(){
  }
}
