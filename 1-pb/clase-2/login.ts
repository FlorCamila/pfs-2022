//Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la contraseña adecuada. Considerar que tanto el usuario como la contraseña están formados sólo por letras. El sistema deberá validar que el usuario y la contraseña sean correctas, comparandolas con lo que el sistema tiene registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario : Juan y la clave : claveJuan.

import * as rls from "readline-sync";

//Declaramos las variables nombre y clave

let nombre : string = rls.question("Ingrese su nombre: ");

let clave : string = rls.question("Ingrese su clave: ");

//Si el nombre es estrictamente igual a Juan y la clave a claveJuan puede ingresar, de lo contrario no podrá

if(nombre === "Juan" && clave === "claveJuan"){

    console.log("Usuario correcto, puede ingresar");

}else{

    console.log("Usuario incorrecto, no puede ingresar. Intente nuevamente");

}