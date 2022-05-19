import * as rls from "readline-sync";


let precio : number = rls.questionFloat ("Ingrese el precio del producto: ");
let cantidad : number = rls.questionInt ("Ingrese la cantidad: ");
let descuento : number = precio * 0.1;
let total : number = precio - descuento;

if(precio >= 1000 && cantidad >=1){

    console.log ("El total con descuento es: " + total );

}else{

    console.log("El total es: " + precio );

}