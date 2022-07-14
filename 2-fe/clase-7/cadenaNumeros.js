// Genere una cadena con los numeros del 1 al 100 (usando ciclos), y agreguelos mediante JavaScript

let boton = document.querySelector('#btn');
let contador=0;

boton.addEventListener('click', () =>{

for(contador = 1; contador <= 100; contador++){

    let numeros = document.createElement('p');

    numeros.innerHTML=contador;

    let contenedor = document.querySelector('.contenedor');

    contenedor.appendChild(numeros);
    
}
})
