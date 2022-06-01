// Ejercicio: Invertir una palabra ingresada por el usuario.

import * as rls from 'readline-sync';


function invertirCadena (){
    let cadena : string = rls.question("Ingrese el texto que desee para invertir: ");
    let nuevaCadenaInvertida : string = "";
    let indice : number;

    for(indice = cadena.length -1; indice >=0; indice--){
        nuevaCadenaInvertida += cadena [indice];

    }
    console.log (nuevaCadenaInvertida);
}

invertirCadena();

