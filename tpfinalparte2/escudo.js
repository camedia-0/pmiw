class escudo{
  constructor(){
  this.posX = 400;
  this.posY = 150;
  this.tamX = 80;
  this.tamY = 10;
  this.direccionEscudo = "ARRIBA";
  }
  
  dibujar(){
    rectMode(CENTER);
    fill(0);
    rect(this.posX, this.posY, this.tamX, this.tamY);
    print(this.direccionEscudo);
    this.mover();
  }
  
  mover(estadoJuego){
    if (estadoJuego !== "JUGANDO") return;
    
    if (keyIsDown(UP_ARROW)){
    this.direccionEscudo = "ARRIBA";
    this.posX = 400;
    this.posY = 150;
    this.tamX = 80;
    this.tamY = 10;
    } else if (keyIsDown(DOWN_ARROW) === true){
    this.direccionEscudo = "ABAJO";
    this.posX = 400;
    this.posY = 250;
    this.tamX = 80;
    this.tamY = 10;
    } else if (keyIsDown(LEFT_ARROW) === true){
    this.direccionEscudo = "IZQUIERDA";
    this.posX = 350;
    this.posY = 200;
    this.tamX = 10;
    this.tamY = 80;
    } else if (keyIsDown(RIGHT_ARROW) === true){
    this.direccionEscudo = "DERECHA";
    this.posX = 450;
    this.posY = 200;
    this.tamX = 10;
    this.tamY = 80;
    }
  }
  
  dañoRecibido(){
  }
  
  morir(){
  }
}
