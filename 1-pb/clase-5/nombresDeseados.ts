// • Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee • Crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas.

import * as rls from 'readline-sync';

let dimensionArray : number = rls.questionInt("Ingrese la dimension del array: ");
let nombrePersonas : string [] = new Array (dimensionArray);
let indice : number;

for (indice = 0; indice < dimensionArray; indice++){
    nombrePersonas[indice] = rls.question(`Ingrese el nombre que desee poner en el lugar ${indice} : `)
}

for(indice = 0; indice < dimensionArray; indice++){
    console.log (`La persona que ingreso en la posicion ${indice} es: ${nombrePersonas[indice]}`);
}