import TelefonoConRadio from "./radio"
import Telefono from "./telefono";
import TelefonoConCamara from "./camara"

let samsung: Telefono =  new Telefono (70, "Samsung", 60, "Negro");
let samsungConRadio: TelefonoConRadio = new TelefonoConRadio (70, "Samsung", 60, "Negro");
let samsungConCamara: TelefonoConCamara = new TelefonoConCamara (70, "Samsung", 60, "Negro","Encendida");

samsung.prenderCelular();
console.log(samsung);
samsung.hacerLlamada(21354646);
console.log(samsung);
samsung.mandarMensaje(5632566);
console.log(samsung);
samsung.apagarCelular();
console.log(samsung);
samsungConRadio.verFrecuenciaActual(96.2);
console.log(samsungConRadio);
samsungConCamara.sacarFoto();
console.log(samsungConCamara);