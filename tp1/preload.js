function precargar(){
  fondo = loadImage("data/fondo.png");
  props = loadImage("data/props.png");
  nubes = loadImage("data/nubes.png");
  logo = loadImage("data/logo.png");
  texto = loadImage("data/texto.png");
  
  for (let a = 0; a < sleep_cant; a++){
  let imagen = loadImage("data/sleep_" + a + ".png");
  sleep.push(imagen);
  }
  
  for (let a = 0; a < awake_cant; a++){
  let imagen = loadImage("data/awake_" + a + ".png");
  awake.push(imagen);
  }
  
  for (let a = 0; a < idle_cant; a++){
  let imagen = loadImage("data/idle_" + a + ".png");
  idle.push(imagen);
  }
  
  for (let a = 0; a < infecting_cant; a++){
  let imagen = loadImage("data/infecting_" + a + ".png");
  infecting.push(imagen);
  }
  
  for (let a = 0; a < infected_cant; a++){
  let imagen = loadImage("data/infected_" + a + ".png");
  infected.push(imagen);
  }
  
  for (let a = 0; a < worm_cant; a++){
  let imagen = loadImage("data/worm_walk_" + a + ".png");
  worm.push(imagen);
  }
}
