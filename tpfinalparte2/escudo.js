class escudo{
  constructor(data){
  this.data = data;
  this.posX = 360+35;
  this.posY = 100+10;
  this.tamX = 75;
  this.tamY = 100;
  this.direccionEscudo = "ARRIBA";
  }
  
  dibujar(){
    
    imageMode(CENTER);
    if(this.direccionEscudo==="ARRIBA"){
      image(this.data.escudoArriba, this.posX, this.posY, this.tamX, this.tamY);
    } else if (this.direccionEscudo === "ABAJO") {
      image(this.data.escudoAbajo, this.posX, this.posY, this.tamX, this.tamY);
    } else if (this.direccionEscudo === "IZQUIERDA") {
      image(this.data.escudoIzquierda, this.posX, this.posY, this.tamX, this.tamY);
    } else if (this.direccionEscudo === "DERECHA") {
      image(this.data.escudoDerecha, this.posX, this.posY, this.tamX, this.tamY);
    }
  
    print(this.direccionEscudo);
    this.mover();
  }
  
  mover(estadoJuego){
    if (estadoJuego !== "JUGANDO") return;
    
    if (keyIsDown(UP_ARROW)){
    this.direccionEscudo = "ARRIBA";
    this.posX = 360+35;
    this.posY = 100+10;

    } else if (keyIsDown(DOWN_ARROW) === true){
    this.direccionEscudo = "ABAJO";
    this.posX = 360+35;
    this.posY = 170+65;
    
    } else if (keyIsDown(LEFT_ARROW) === true){
    this.direccionEscudo = "IZQUIERDA";
    this.posX = 310+35;
    this.posY = 150+50;
    
    } else if (keyIsDown(RIGHT_ARROW) === true){
    this.direccionEscudo = "DERECHA";
    this.posX = 410+45;
    this.posY = 150+50;
  
    }
  }
}
