// • Almacene en un arreglo de tamaño N los números ingresados por el usuario • La dimensión N también es ingresada por el usuario • Muestre los números del arreglo pero del último al primero.

import * as rls from 'readline-sync';

let dimensionArray : number = rls.questionInt("Ingrese la dimension del array: ");
let numerosDeseados : string [] = new Array (dimensionArray);
let indice : number;

for (indice = 0; indice < dimensionArray; indice++){
    numerosDeseados[indice] = rls.questionInt(`Ingrese el numero que desee : `)
}

console.log (numerosDeseados.reverse())