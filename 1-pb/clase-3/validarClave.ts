// Escribir un algoritmo que nos pida una clave y verifique que sea la correcta. Tenga en cuenta que la clave es la palabra “eureka”. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades. Si acertamos la clave, saldremos directamente del programa

import * as rls from "readline-sync";

// Declaramos variables clave, contadaor, claveIngresada

const clave : string = "eureka";
let contador : number = 0;
let claveIngresada : string = "";

while (contador < 3 && claveIngresada != clave) {

claveIngresada = rls.question("Introduzca la clave: ");
contador ++;
}

if (claveIngresada != clave) {

console.log("Ya no tiene más intentos");
}
