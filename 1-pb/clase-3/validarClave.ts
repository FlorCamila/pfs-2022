// Escribir un algoritmo que nos pida una clave y verifique que sea la correcta. Tenga en cuenta que la clave es la palabra “eureka”. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades. Si acertamos la clave, saldremos directamente del programa

import * as rls from "readline-sync";

// Declaramos variable contador

let contador : number = 0;

//  El usuario ingresará la clave, la cuál debe ser eureka, de lo contrario tiene 3 intentos mas para probar.

while(contador < 3){

    let clave : string = rls.question ("Ingrese su clave: ");

    if(clave === "eureka"){

        console.log("Clave correcta, bienvenido/a");

        break;

    }else if(clave != "eureka"){

        console.log("Clave incorrecta")
        
    }

        contador++ 

    if(contador == 3){

        console.log("No tiene mas intentos, intente mas tarde nuevamente")
        
    }

    }
