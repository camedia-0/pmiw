class Flecha{
 constructor(posX,posY,data){
   this.data = data;
   this.posX = posX;
   this.posY = posY;
   this.velocidad_h = 5;
   this.velocidad_v = 3;
   this.direccion = "-";
   this.disparada = false;
   this.ancho=30;
   this.alto=30;
  }

  dibujar(){
    if(this.disparada){
    
    this.mover();
    }
  }

  dispara(){
    this.disparada= true;
  }

  disparaIzquierda(){
    this.posX = this.posX - this.velocidad_h;
    imageMode(CENTER);
    image(this.data.flechaDerecha, this.posX, this.posY, this.ancho, this.alto);
    imageMode(CORNER);
  }

  disparaDerecha(){
    this.posX = this.posX + this.velocidad_h;
    imageMode(CENTER);
    image(this.data.flechaIzquierda, this.posX, this.posY, this.ancho, this.alto);
    imageMode(CORNER);
  }
  disparaAbajo(){
    imageMode(CENTER);
    image(this.data.flechaArriba, this.posX, this.posY, this.ancho, this.alto);
    imageMode(CORNER);
    this.posY = this.posY + this.velocidad_v; 
  }

  disparaArriba(){
    imageMode(CENTER);
    image(this.data.flechaAbajo, this.posX, this.posY, this.ancho, this.alto);
    imageMode(CORNER);
    this.posY = this.posY - this.velocidad_v; 
  }

  mover(){
  if (this.direccion === "ARRIBA"){
      this.disparaArriba();
    } else if (this.direccion === "ABAJO"){
      this.disparaAbajo();
    } else if (this.direccion === "DERECHA"){
      this.disparaDerecha();    
    } else if (this.direccion === "IZQUIERDA"){
      this.disparaIzquierda();  
    }
  }
  
  colision(escudoActual, personajeActual){
    if (this.disparada){
      let colisionoConEscudo = false;
      let llegoAlCentro = false;

      if (this.direccion === "ARRIBA" && this.posY <= 250 && this.posY >= 230) { 
        if (escudoActual.direccionEscudo === "ABAJO") {
          colisionoConEscudo = true;
        }
      } 
      else if (this.direccion === "ABAJO" && this.posY >= 150 && this.posY <= 170) {
        if (escudoActual.direccionEscudo === "ARRIBA") {
          colisionoConEscudo = true;
        }
      }
      else if (this.direccion === "DERECHA" && this.posX >= 350 && this.posX <= 370) {
        if (escudoActual.direccionEscudo === "IZQUIERDA") {
          colisionoConEscudo = true;
        }
      }
      else if (this.direccion === "IZQUIERDA" && this.posX <= 450 && this.posX >= 430) {
        if (escudoActual.direccionEscudo === "DERECHA") {
          colisionoConEscudo = true;
        }
      }

      if (colisionoConEscudo) {
        this.data.sfxEscudo.play();
        this.reiniciarFlecha();
      } 
      else {
        if (this.posX === 400 && this.posY === 200
        || (this.direccion === "ARRIBA" && this.posY <= 200)
        || (this.direccion === "ABAJO" && this.posY >= 200)) {
          personajeActual.dañoRecibido();
          this.reiniciarFlecha();
        }
      }
    }
  }
  
  reiniciarFlecha() {
    this.disparada = false;
  }
}
