import LocalElectrodomesticos from "./localElectrodomesticos";
import Aire from "./aire";

let philco:Aire = new Aire ("Philco", 107.000, "Si", "Calor"); //Creo los aires
let noblex:Aire = new Aire ("Noblex", 145.000, "Si", "Frio");
let hitachi:Aire = new Aire ("Hitachi", 100.000, "No", "Calor");

let localDeCompra:LocalElectrodomesticos = new LocalElectrodomesticos ("Musimundo"); //Creo local de electrodomesticos

localDeCompra.createAires(philco); //Agrego
localDeCompra.createAires(hitachi);
console.log(localDeCompra.readAiresTxt()); //Leo por consola

localDeCompra.updateAires(noblex, 1); //Actualizo, cambio hitachi por noblex
console.log(localDeCompra.readAiresTxt()); //Leo por consola

localDeCompra.deleteAires(1); //Elimino uno (noblex)
console.log(localDeCompra.readAiresTxt()); //Leo por consola