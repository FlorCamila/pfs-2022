// let saludoBienvenida = document.getElementById("btnBienvenida");

// saludoBienvenida.addEventListener("click", mensajeDeBienvenida);

// function mensajeDeBienvenida (){
//     alert("Bienvenido/a a nuestro sitio");
// }

// let btnContador = document.getElementById("btnContador");

// let cuentaClicks = 0;

// btnContador.addEventListener("click", contar);

// function contar(){
//     cuentaClicks++
//     console.log(`Click realizados: ${cuentaClicks}`);
// }


// Buena practica usar "use strict"

"use strict";

let tbxNombre = document.getElementById("tbxNombre");
let txtSaludo = document.getElementById("txtSaludo");

tbxNombre.addEventListener("input", saludar);

function saludar(){
    let nombre = tbxNombre.value;
    txtSaludo.innerHTML = `Bienvenido/a: ${nombre}`;
}

