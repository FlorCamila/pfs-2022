// • Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase


import * as rls from 'readline-sync';

let texto : string = rls.question("Ingrese un texto: ");

function pasarACamelCase(texto:string) :string{
    let aMayuscula : boolean = false;
    let camelCase : string = " ";

    for(let index : number = 0; index < texto.trim().length; index++){
        if(texto[index] == " "){
            aMayuscula = true;
        }else{
            if (aMayuscula){
                camelCase += texto[index].toUpperCase();
                aMayuscula = false;
            }else{
                camelCase +=texto[index].toLowerCase();
            }
        }
    }

    return camelCase;
}

console.log (`El texto: ${texto} convertido a CamelCase queda: ${pasarACamelCase(texto)}`);