class juego {
  constructor(data) {
    this.data = data;
    this.ui = new Interfaz();
    this.estado = "INICIO";
    this.iniciarVariables();
  }

  iniciarVariables() {
    this.crearPersonaje();
    this.crearEscudo();
    this.crearEnemigos();
    this.tiempoDisparo = 0;
    this.flechasDisparadasTotales = 0;
    this.rondaActual = 1;
    this.progresoRadio = 0;
  }

  dibujar() {
    rectMode(CORNER);
  
    image(this.data.fondo, 0, 0, width, height);

    if (this.estado === "INICIO") {
      this.ui.dibujarPantallaInicio();
      return;
    }

    this.personaje.dibujar(this.estado);
    
    this.escudo.dibujar();
    this.escudo.mover(this.estado);

    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
      if (this.estado === "JUGANDO") {
        this.enemigos[i].flecha.colision(this.escudo, this.personaje);
      }
    }

    if (this.estado === "JUGANDO") {
      this.disparos();
      this.verificarCondicionesFin();
    }

    this.ui.dibujarHUD(this.rondaActual, this.progresoRadio, this.personaje.vida);

    if (this.estado === "VICTORIA" || this.estado === "DERROTA") {
      this.ui.dibujarCartelFin(this.estado);
    }
  }

  verificarCondicionesFin() {
    if (this.progresoRadio >= 100) {
      this.estado = "VICTORIA";
      this.data.sfxVictoria.play();
    }
    if (this.personaje.vida <= 0) {
      this.estado = "DERROTA";
      this.data.sfxDerrota.play();
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    let lados = ["ARRIBA", "ABAJO", "IZQUIERDA", "DERECHA"];
    for (let i = 0; i < lados.length; i++) {
      this.enemigos[i] = new enemigo(lados[i], this.data);
    }
  }

  crearPersonaje() {
    this.personaje = new personaje(this.data);
  }

  crearEscudo() {
    this.escudo = new escudo(this.data);
  }

  disparos() {
    this.tiempoDisparo++;

    let frecuenciaDisparo = 90;
    if (this.rondaActual === 2) {
      frecuenciaDisparo = 50;
    }
    
    if (this.tiempoDisparo > frecuenciaDisparo) {
      let enemigoAleatorio = int(random(this.enemigos.length));

      if (!this.enemigos[enemigoAleatorio].flecha.disparada) {
        this.enemigos[enemigoAleatorio].dispararFlecha();
        this.flechasDisparadasTotales++;
        this.progresoRadio += 5;

        if (this.flechasDisparadasTotales === 10 && this.rondaActual === 1) {
          this.rondaActual = 2;
        }
      }
      this.tiempoDisparo = 0;
    }
  }

  manejarClic() {
    if (this.estado === "INICIO") {
      if (this.ui.clicEnBotonInicio()) {
        this.iniciarVariables();
        this.estado = "JUGANDO";
        this.data.musicaFondo.setVolume(0.5);
        this.data.musicaFondo.loop();
      }
    } else if (this.estado === "VICTORIA") {
      if (this.ui.clicEnBotonReinicio()) {
        this.iniciarVariables();
        this.estado = "INICIO";
      }
    } else if (this.estado === "DERROTA") {
      if (this.ui.clicEnBotonReinicio()) {
        this.iniciarVariables();
        this.estado = "JUGANDO";
      }
    }
  }
}
