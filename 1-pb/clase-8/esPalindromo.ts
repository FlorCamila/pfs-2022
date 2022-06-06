// Escribir un algoritmo que pida al usuario ingresar una palabra y determine si esta palabra es palíndroma (capicua).

import * as rls from 'readline-sync';

let palabraIngresada : string = rls.question("Ingrese la palabra que desee: ");

function esPalindromo(texto:string) : boolean{
    for(let i : number =0; i<texto.length;i++){
        if(texto[i] != texto[texto.length-1-i]){
            return false;
        }
    }

    return true;
}

esPalindromo(palabraIngresada);
console.log(`La palabra ingresada por el usuario es ${palabraIngresada}, y con un tipo de dato (boolean) chequeamos si es palindromo o no. Resultado: ${esPalindromo(palabraIngresada)}`);



