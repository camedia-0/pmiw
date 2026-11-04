class enemigo{
  constructor(){
  this.posY=100;
  this.posX=100;
  this.micolor= color((random)(255),(random)(255),(random)(255));
  this.posicion();
  this.flecha = new flecha;
  this.disparar=false;
  this.daño= 1;
  
}
  dibujar(){
    fill(this.micolor);
    rect(this.posX, this.posY,50, 50);
  }

  posicion(){
    
   let posicion = ["ARRIBA", "ABAJO", "IZQUIERDA", "DERECHA"];
   let estado = random(posicion);
   
    this.posicion = estado; 
    if (estado === "ARRIBA") {
      this.posX = 400;
      this.posY = 0;
    } else if (estado === "ABAJO") {
      this.posX = 400;
      this.posY = 400;
    } else if (estado === "IZQUIERDA") {
      this.posX = 0;
      this.posY = 200;
    } else if (estado === "DERECHA") {
      this.posX =800;
      this.posY = 200;
    }
  }
  disparar(){

  }
  
  dañar(){
  }
  
  matar(){
  }
}
