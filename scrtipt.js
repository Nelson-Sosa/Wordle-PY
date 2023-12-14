// script.js
let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];

window.addEventListener('load', init);
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function init() {
  palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
}
function intentar(){
  const INTENTO = leerIntento();
  if (INTENTO === palabra ) {
      console.log("GANASTE!")
      return
  }
  const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
  for (let i in palabra){
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
      if (INTENTO[i]===palabra[i]){//verde
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'green';
      } else if( palabra.includes(INTENTO[i]) ) {//amarillo
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'yellow';
      } else {
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = 'grey';
      }
      ROW.appendChild(SPAN)
  }
  GRID.appendChild(ROW)
  intentos--
  if (intentos==0){
      console.log("PERDISTE!")
  }
}



function leerIntento(){
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase(); 
  return intento;
}



function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}
