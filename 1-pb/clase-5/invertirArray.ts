// • Almacene en un arreglo de tamaño N los números ingresados por el usuario • La dimensión N también es ingresada por el usuario • Muestre los números del arreglo pero del último al primero.

import * as rls from 'readline-sync';

// let dimensionArray : number = rls.questionInt("Ingrese la dimension del array: ");
// let numerosDeseados : number [] = new Array (dimensionArray);
// let indice : number;

// for (indice = 0; indice < dimensionArray; indice++){
//     numerosDeseados[indice] = rls.questionInt(`Ingrese el numero que desee : `)
// }

// console.log (`Array invertido: ${numerosDeseados.reverse()}`)

let dimensionArray : number = rls.questionInt("Ingrese la dimension del array: ");
let numerosDeseados : number [] = new Array (dimensionArray);
let arrayNumerosDeseadosInvertido : number [] = new Array (dimensionArray);
let indice : number;

for(indice = 0; indice < dimensionArray; indice++){
    numerosDeseados[indice] = rls.question ("Ingrese el numero que desee: ");

    arrayNumerosDeseadosInvertido[dimensionArray-1-indice] = numerosDeseados[indice];
}

console.log (`El arreglo elegido por el usuario es: ${numerosDeseados} * Luego lo invertimos y se ve de la siguiente manera: ${arrayNumerosDeseadosInvertido}`);