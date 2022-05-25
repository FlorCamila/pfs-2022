// • Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario) • Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay.

import * as rls from 'readline-sync';

let dimensionArray : number = rls.questionInt("Ingrese la dimension del array: ");
let arrayNumerosElegidos : number [] = new Array (dimensionArray);
let indice : number;
let numero0 : number = 0;
let numerosPositivos : number = 0;
let numerosNegativos : number = 0;

for (indice = 0; indice < (arrayNumerosElegidos.length); indice++){  
    arrayNumerosElegidos[indice] = rls.questionInt(`Ingrese el numero que desee, puede ser negativo como positivo: `); 
    
    if(arrayNumerosElegidos[indice] < 0){
        numerosNegativos++
    }else if(arrayNumerosElegidos[indice] > 0){
        numerosPositivos++
    }else{
        numero0++
    }
} 

console.log (`Los numeros que elegiste son los siguiente: ${arrayNumerosElegidos}`);
console.log(`Los numeros positivos son : ${numerosPositivos}, los negativos son : ${numerosNegativos} y los ceros ${numero0}`);