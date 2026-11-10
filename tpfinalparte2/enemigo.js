class enemigo {
  constructor(ladoAsignado) {
    this.micolor = color(random(255), random(255), random(255));
    this.daño = 1;

    this.lado = ladoAsignado;
    this.flecha = new Flecha();
    this.posicionar();
  }

  posicionar() {
    if (this.lado === "ARRIBA") {
      this.posX = 400;
      this.posY = 0;
      this.flecha.direccion = "ABAJO";
    } else if (this.lado === "ABAJO") {
      this.posX = 400;
      this.posY = 400;
      this.flecha.direccion = "ARRIBA";
    } else if (this.lado === "IZQUIERDA") {
      this.posX = 0;
      this.posY = 200;
      this.flecha.direccion = "DERECHA";
    } else if (this.lado === "DERECHA") {
      this.posX = 800;
      this.posY = 200;
      this.flecha.direccion = "IZQUIERDA";
    }

    this.flecha.posX = this.posX;
    this.flecha.posY = this.posY;
  }

  dibujar() {
    fill(this.micolor);
    rect(this.posX, this.posY, 50, 50);
    this.flecha.dibujar();
  }

  dispararFlecha() {
    this.flecha.posX = this.posX;
    this.flecha.posY = this.posY;
    this.flecha.dispara();
  }
}
