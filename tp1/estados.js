function animar(frames, frames_cant, velocidad, x, y, ancho, alto){
  let frame = floor(frame_animacion / velocidad) % frames_cant;
  image(frames[frame], x, y, ancho, alto);
  frame_animacion++;
  return frame;
}

function estado_sleep(){
  
  let frame = animar(sleep, sleep_cant, velocidadAnimacion_1, 420, 400, 50*tam, 50*tam);
  sleep_tiempo++;

  if(sleep_tiempo >= 300){
    estado_personaje = "AWAKE";
    frame_animacion = 0;
  }
}

function estado_awake(){
  let frame = animar(awake, awake_cant, velocidadAnimacion_1, 420, 400, 50*tam, 50*tam);
  awake_tiempo++;

  if(awake_tiempo >= 16){
    estado_personaje = "IDLE";
    frame_animacion = 0;
  }
}

function estado_idle(){
  let frame = animar(idle, idle_cant, velocidadAnimacion_1, 425, 400, 45*tam, 50*tam);
  idle_tiempo++;

  if(idle_tiempo >= 60){
    estado_personaje = "INFECTING";
    frame_animacion = 0;
  }
}

function estado_infecting(){
  let frame = animar(infecting, infecting_cant, velocidadAnimacion_1, 405, 375, 100*tam, 75*tam);
  infecting_tiempo++;
  
  if(infecting_tiempo >= 302){
  estado_personaje = "INFECTED";
  frame_animacion = 0;
  }
}

function estado_infected(){
  let frame = animar(infected, infected_cant, velocidadAnimacion_2, infected_x, 375, 100*tam, 74*tam);
  infected_x = infected_x + 2.5;
  infected_tiempo++;
}

function estado_worm(){
  let frame = floor(frameCount/velocidadAnimacion_2) % worm_cant;
  image(worm[frame], worm_x+120, worm_y+140, 45*tam, 40*tam);
  
  if(worm_tiempo <= 375){
  worm_x = worm_x - 0.96;
  } else {
  worm_x = 800;
  }
  if(worm_tiempo >= 365){
  worm_y--;
  }
}

function logo_final(){
  image(logo, width/2, logo_y, 352*1.4, 132*1.4);
  image(texto, width/2, texto_y, 800, 600);
  if(infected_tiempo >= 60){
    if(logo_y <= height/2){
      logo_y = deslizar(logo_y, height/2, 0.03);
      texto_y = deslizar(texto_y, 50, 0.02);
    }
    final_tiempo++;
  }
}

function deslizar(valor, objetivo, velocidad){
  return valor + (objetivo - valor) * velocidad;
}
