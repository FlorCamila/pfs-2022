import  RegistroAutomotor  from "./Registro";
import Auto from "./Auto";
import Camion from "./Camion";
import Camioneta from "./Camioneta";

import * as RLS from 'readline-sync';

//Inicializacion
let registro : RegistroAutomotor = new RegistroAutomotor();
registro.cargarVehiculos();
registro.mostrarVehiculos();
//Principal
//menu de opciones CRUD
let opcion: string = RLS.question('Ingrese una opcion (C-R-U-D-L-S), X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            let datosVehiculo = RLS.question('Ingrese los datos del vehiculo a agregar (separados por ;) : ');
            let vehiculo: string[] = datosVehiculo.split(';');
            switch (vehiculo[0]) { // vehiculo.length 8, 9, 10 segun tamaño de registro - otra opcion
                case 'Auto': 
                    registro.addVehiculo(new Auto(vehiculo[0],vehiculo[1],vehiculo[2],vehiculo[3],parseInt(vehiculo[4])));
                    break;
                case 'Camioneta': 
                    registro.addVehiculo(new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    registro.addVehiculo(new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
            registro.mostrarVehiculos();
            break;
        }
        case 'R': {
            let dominio: string = RLS.question('Ingrese el dominio a buscar: ');
            let posAuto: number = registro.findVehiculo(dominio);
            if (posAuto!=-1) {
                console.log(`Encontre el dominio ${dominio} para ${registro.mostrarVehiculos(posAuto)} en la posicion ${posAuto}.`);
            } else {
                console.log(`No encontre el dominio ${dominio}`);                
            }
            break;            
        }
        case 'U': {
            let dominio: string = RLS.question('Ingrese el dominio a modificar: ');
            let datosVehiculo = RLS.question('Ingrese los datos del vehiculo a agregar (separados por ;) : ');
            let vehiculo: string[] = datosVehiculo.split(';');
            switch (vehiculo[0]) { // vehiculo.length 8, 9, 10 segun tamaño de registro - otra opcion
                case 'Auto': 
                    registro.updVehiculo(dominio,new Auto(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5])));
                    break;
                case 'Camioneta': 
                    registro.updVehiculo(dominio,new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    registro.updVehiculo(dominio,new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
            registro.mostrarVehiculos();
            break;
        }
        case 'D': {
            let dominio: string = RLS.question('Ingrese el dominio a eliminar: ');
            registro.delVehiculo(dominio);
            registro.mostrarVehiculos();
            break;
        }
        case 'L': {
            registro.mostrarVehiculos();
            break;                        
        }
        case 'S': {
            registro.guardarVehiculos();
            break;                        
        }
    }
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}