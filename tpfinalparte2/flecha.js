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

  moverIzquierda() {
    this.posX = this.posX - this.velocidad_h;
    rect(this.posX, this.posY, 15, 5);
  }

  moverDerecha() {
    this.posX = this.posX + this.velocidad_h;
    rect(this.posX, this.posY, 15, 5);
  }
  moverAbajo() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY + this.velocidad_v; 
  }

  moverArriba() {
     rect(this.posX, this.posY, 5, 15)
    this.posY = this.posY - this.velocidad_v; 
  }

  mover() {
  if (this.direccion === "ARRIBA") {
      this.moverArriba();
    } else if (this.direccion === "ABAJO") {
      this.moverAbajo();
    } else if (this.direccion === "DERECHA") {
      this.moverDerecha();    
    } else if (this.direccion === "IZQUIERDA") {
      this.moverIzquierda();  
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
        print("¡Bloqueado por el escudo! La flecha desaparece.");
        this.reiniciarFlecha();
      } 
      else {
        if (this.posX === 400 && this.posY === 200
        || (this.direccion === "ARRIBA" && this.posY <= 200)
        || (this.direccion === "ABAJO" && this.posY >= 200)) {
          print("¡Impacto en la líder!");
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
