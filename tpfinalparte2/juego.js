class juego{
  constructor(){
  this.personaje = new personaje();
  this.escudo = new escudo();
  this.enemigos = [];
  }
  
  dibujar(){
    this.personaje.dibujar();
    this.escudo.dibujar();
  }
  
  iniciar(){
  }
}
