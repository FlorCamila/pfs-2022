// Crear un metodo esMultiplo con 2 parametros que devuelva el valor logico verdadero o falso segun si el primer numero que se indique como parametro es multiplo de segundo.

import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese el numero a verificar: ");
let numero2 : number = rls.questionInt("Indique el numero  multiplo: ");

if(esMultiplo(numero1,numero2)){
    console.log(`${numero1} es multiplo de ${numero2}`);
}else{
    console.log (`${numero1} no es multiplo de ${numero2}`);
}

function esMultiplo(numero1 : number, numero2 : number) : boolean{
    return((numero1%numero2) ==0 );
};