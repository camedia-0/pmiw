class Flecha{
 constructor(posX,posY){
   this.posX = posX;
   this.posY = posY;
   this.velocidad_h = 5;
   this.velocidad_v = 3;
   this.direccion = "-";
   this.disparada = false;
  }

  dibujar(){
    if(this.disparada){
    fill(255,0,0); 
    this.mover();
    }
  }

  dispara(){
    this.disparada= true;
  }

  dispararIzquierda() {
    this.posX = this.posX - this.velocidad_h;
    rect(this.posX, this.posY, 15, 5);
  }

  dispararDerecha() {
    this.posX = this.posX + this.velocidad_h;
    rect(this.posX, this.posY, 15, 5);
  }
  dispararAbajo() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY + this.velocidad_v; 
  }

  dispararArriba() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY - this.velocidad_v; 
  }

  mover() {
  if (this.direccion === "ARRIBA") {
      this.dispararArriba();
    } else if (this.direccion === "ABAJO") {
      this.dispararAbajo();
    } else if (this.direccion === "DERECHA") {
      this.dispararDerecha();    
    } else if (this.direccion === "IZQUIERDA") {
      this.dispararIzquierda();  
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
