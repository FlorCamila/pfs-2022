// Crear una página web, agregar un campo para llevar un contador de X elementos que siempre arranque en 0 • En la página web se muestra la cantidad de X. • Hay un botón para incrementar la cantidad. • Hay un botón para decrementar la cantidad. • Hay una caja de texto para sumar muchos elementos X en una sola acción.

// Declaro variables 
let incremento = document.getElementById("incremento");
let decremento = document.getElementById("decremento");
let contador = 0; 

// Evento
incremento.addEventListener("click", incrementar);
decremento.addEventListener("click", decrementar);

// se crea funcion para incrementar y se activa el evento
function incrementar(){
// se obtiene el valor del input y se incrementa
let cantidad = document.getElementById("cantidad").value = ++contador;
}

// se crea funcion para decrementar y se activa el evento
function decrementar(){
// se obtiene el valor del input y se decrementa
let cantidad = document.getElementById("cantidad").value = --contador; 
}