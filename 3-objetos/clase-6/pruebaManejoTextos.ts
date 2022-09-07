import ManejoTextos from './ManejoTextos';
import Aire from './aire';

let info : Aire[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MTAire : ManejoTextos = new ManejoTextos('datosAires.txt', ';', ',');
MTAire.leerArchivo();
MTAire.getCantidadFilas();
cantidadFilas = MTAire.getCantidadFilas();
for (let i = 0; i < cantidadFilas; i++) {
    fila = MTAire.getFila(i);
    info.push(new Aire((fila[0]),parseInt(fila[1]),(fila[2]),(fila[3])));    
}
console.log(info);
