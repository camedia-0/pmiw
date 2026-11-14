class enemigo {
  constructor(ladoAsignado,data) {
    this.data= data;
    this.daño = 1;

    this.lado = ladoAsignado;
    this.flecha = new Flecha(0,0,data);
    

   this.frames=[];
   this.velocidad=15;
   this.ancho=80;
   this.alto=80;
   this.posicionar();
  }
  
  posicionar(){
    if (this.lado === "ARRIBA") {
      this.posX = 400;
      this.posY = 0;
      this.flecha.direccion = "ABAJO";
      this.frames = this.data.disparaArriba; 
    } else if (this.lado === "ABAJO") {
      this.posX = 400;
      this.posY = 400;
      this.flecha.direccion = "ARRIBA";
      this.frames = this.data.disparaAbajo;
    } else if (this.lado === "IZQUIERDA") {
      this.posX = 0;
      this.posY = 200;
      this.flecha.direccion = "DERECHA";
      this.frames = this.data.disparaIzquierda;
    } else if (this.lado === "DERECHA") {
      this.posX = 800;
      this.posY = 200;
      this.flecha.direccion = "IZQUIERDA";
      this.frames = this.data.disparaDerecha;
    }

  }

  dibujar() {
    let frameActual=0;
    if(this.flecha.disparada){
    frameActual= floor( frameCount/ this.velocidad) % this.frames.length; 
    }
    imageMode(CENTER);
    image(this.frames[frameActual], this.posX, this.posY,this.ancho, this.alto);
    imageMode(CORNER);

    this.flecha.dibujar();
  }

  dispararFlecha() {
    this.flecha.posX = this.posX;
    this.flecha.posY = this.posY;
    this.flecha.dispara();
  }
}
