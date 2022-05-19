// Leer valores hasta que se introduzca 0. El usuario puede introducir valores positivos y negativos. Encontrar el maximo de los elementos que se introdujeron.

import * as rls from "readline-sync";

// Declaramos las variables numero  y maximo

let numero : number = rls.questionInt("Ingrese un numero, para finalizar coloque 0 : ");

let maximo : number = 0;

//  El usuario ingresa diferentes numeros, si toca 0 deja de leer y encuentra entre los numeros que ingreso al comienzo el maximo.

while(numero != 0){

    if(numero > maximo){

        maximo = numero

    }

    numero= rls.questionInt("Ingrese un numero, para finalizar coloque 0 : "); 
    
}

console.log ("El numero maximo es: " + maximo)