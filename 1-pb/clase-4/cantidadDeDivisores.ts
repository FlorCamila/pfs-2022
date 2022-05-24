// Implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la cantidad de los divisores.

import * as rls from 'readline-sync';

let numero : number = rls.questionInt ("Ingrese un numero: ");
let numerosDivisores : number = cantidadDeDivisores (numero);

console.log (`El numero ${numero}, tiene ${numerosDivisores} divisores`);

function cantidadDeDivisores (numero : number) : number{
    let cantidad : number = 0;
    let divisor : number;

    for (divisor =1; divisor <= numero; divisor++){
        if(esMultiplo(numero, divisor)){
            cantidad++;
        }
    }
    return cantidad;
};

function esMultiplo(numero1 : number, numero2 : number) : boolean{
    return ((numero1%numero2)==0);
};