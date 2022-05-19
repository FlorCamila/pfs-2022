// Diseñar un algoritmo que muestre por pantalla la tabla de multiplicacion del numero ingresado por el usuario. Para definir hasta que numero desea que muestre la tabla de multiplicacion, el usuario tambien debera ingresar un valor.

import * as rls from "readline-sync";

// Declaramos las variables numero 1 y numero 2 preguntando al usuario el numero que quiera ingresar para comenzar y finalizar.

let numero1 : number = rls.questionInt("Ingrese un numero de la tabla que desee: ");

let numero2 : number = rls.questionInt ("Ingrese otro numero para finalizarla donde desee: ");

// El usuario ingresa los numeros, se multiplica y se muestra resultado. 

for (let i : number = 1; i <= numero2; i++){

    let multiplicacion = numero1 * i; 

    console.log(numero1 + "x" + i + "=" + multiplicacion );

}