// • Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo • El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario.

import * as rls from 'readline-sync';

let array1 : number []= new Array (6); 
let array2 : number []= new Array (6); 
let resultadoArrays : number []= new Array (6); 
let indice : number;

for (indice = 0; indice < (array1.length); indice++){  
  array1[indice] = rls.questionInt(`Ingrese un numero para el arreglo 1 en la posicion ${indice}: `); 
  array2[indice] = rls.questionInt(`Ingrese un numero para el arreglo 2 en la posicion ${indice}: `); 
  resultadoArrays[indice]=array1[indice]+array2[indice];
}

console.log (`El total de la suma de los dos arrays es ${resultadoArrays}`)