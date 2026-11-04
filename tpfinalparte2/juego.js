class juego{
  constructor(){
  this.crearPersonaje();
  this.crearEscudo();
  this.crearEnemigos();

  }
  
  dibujar(){
    this.personaje.dibujar();
    this.escudo.dibujar();
    
    
     for(let i=0; i<4; i++){
     this.enemigos[i].dibujar();
    // this.flechas.dibujar();
  }
  }
  
  
  crearEnemigos(){
   this.enemigos=[];
   for(let i=0; i<4; i++){
     this.enemigos[i] = new enemigo();
}
  }

  crearPersonaje(){
      this.personaje = new personaje();
  }
  
  crearEscudo(){
    this.escudo = new escudo();
  }
    
  iniciar(){
  }
  
  }
