//Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en un parque de diversiones. Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más.

import * as rls from "readline-sync";

//Declaramos la variable altura

let altura : number = rls.questionFloat("Por favor ingrese su altura: ");

//Si la persona mide 1.30 o más puede subir de lo contario no

if(altura >= 1.30){

    console.log ("Puede subir a la montaña rusa")

}else{

    console.log("No puede subir ya que la altura permitida es de 1.30")

}