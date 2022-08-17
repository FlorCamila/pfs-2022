import LocalElectrodomesticos from "./localElectrodomesticos";
import Aire from "./aire";

let philco:Aire = new Aire ("Philco", 107.000, "Si", "Calor");
let noblex:Aire = new Aire ("Noblex", 145.000, "Si", "Frio");
let hitachi:Aire = new Aire ("Hitachi", 100.000, "No", "Calor");

let localDeCompra:LocalElectrodomesticos = new LocalElectrodomesticos ("Musimundo");

localDeCompra.createAires(philco);
localDeCompra.createAires(hitachi);
console.log(localDeCompra);
console.log(localDeCompra.readAiresTxt());

localDeCompra.updateAires(noblex, 1);
console.log(localDeCompra.readAires());
console.log(localDeCompra.readAiresTxt());

localDeCompra.deleteAires(1);
console.log(localDeCompra.readAiresTxt());

