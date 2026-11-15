class Data {  
  constructor() {
    this.disparaArriba = [];
    this.disparaAbajo = [];
    this.disparaDerecha = [];
    this.disparaIzquierda = [];

    this.frames = 2;

    for (let i = 1; i <= this.frames; i++) {  
      this.disparaArriba.push(loadImage("data/DisparaArriba" + i + ".png"));
      this.disparaAbajo.push(loadImage("data/DisparaAbajo" + i + ".png"));
      this.disparaDerecha.push(loadImage("data/DisparaDerecha" + i + ".png"));
      this.disparaIzquierda.push(loadImage("data/DisparaIzquierda" + i + ".png"));
    }
    
    this.flechaArriba = loadImage("data/FlechaArriba.png");
    this.flechaAbajo = loadImage("data/FlechaAbajo.png");
    this.flechaIzquierda = loadImage("data/FlechaIzquierda.png");
    this.flechaDerecha = loadImage("data/FlechaDerecha.png");
    
    this.fondo = loadImage("data/fondo.jpeg");

    this.Quantico = loadFont("data/Quantico-Regular.ttf");
    this.StickNoBills = loadFont("data/StickNoBills-VariableFont_wght.ttf");
    
    this.escudoArriba = loadImage("data/escudo_arriba.png");
    this.escudoAbajo = loadImage("data/escudo_abajo.png");
    this.escudoIzquierda = loadImage("data/escudo_izquierda.png");
    this.escudoDerecha =loadImage("data/escudo_derecha.png");
    
    this.liderNormal = loadImage("data/lider_normal.png");
    this.lider3Vidas = loadImage("data/lider_con_3_vidas.png");
    this.lider1Vida = loadImage("data/lider_con_1_vida.png");
    this.liderSinVida = loadImage("data/lider_sin_vida.png");
    this.liderVictoria = loadImage("data/lider_victoria.png");

    this.musicaFondo = loadSound("data/musica_fondo.mp3");
    this.sfxFlecha = loadSound("data/flecha_sfx.mp3");
    this.sfxVictoria = loadSound("data/victoria_sfx.mp3");
    this.sfxDerrota = loadSound("data/derrota_sfx.mp3");
    this.sfxEscudo = loadSound("data/sfxEscudo.mp3");
    this.sfxHit = loadSound("data/sfxHit.mp3");
  } 
}
