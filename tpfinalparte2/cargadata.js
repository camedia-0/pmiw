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
    
    this.fondo = loadImage("data/fondo.jpeg");

    this.Quantico = loadFont("data/Quantico-Regular.ttf");
    this.StickNoBills = loadFont("data/StickNoBills-VariableFont_wght.ttf");
    
    this.liderNormal = loadImage("data/lider_normal.png");
    this.lider3Vidas = loadImage("data/lider_con_3_vidas.png");
    this.lider1Vida = loadImage("data/lider_con_1_vida.png");
    this.liderSinVida = loadImage("data/lider_sin_vida.png");
    this.liderVictoria = loadImage("data/lider_victoria.png");
  } 
}
