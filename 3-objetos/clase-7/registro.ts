import * as FS from 'fs';
import ManejoTextos from '../manejoTextos/ManejoTextos';
import Auto from './Auto';
import Camion from './Camion';
import Camioneta from './Camioneta';
import Vehiculo from './Vehiculo';

//estructura para las palabras
export default class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    public constructor() {
        this.vehiculos=[];
    }
    
    public addVehiculo(vehiculo:Vehiculo) : void {
        this.vehiculos.push(vehiculo);
    }
    public findVehiculo(dominio: string): number { //Read (retorna posicion)
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getDominio() == dominio) {
                return i;
            }
        }
        return -1;
    }
    public updVehiculo(dominio: string, vehiculoNuevo: Vehiculo): void { //Update
        let posicion = this.findVehiculo(dominio);
        if (posicion != -1) {
            this.vehiculos[posicion] = vehiculoNuevo;
        }
    }
    public delVehiculo(dominio: string): void {    //Delete
        let posicion=this.findVehiculo(dominio);
        if (posicion != -1) {
            this.vehiculos.splice(posicion,1);
        }
    }
    public cargarVehiculos(): void {
        let datosVehiculos: ManejoTextos = new ManejoTextos('vehiculos.txt','\n',';');
        datosVehiculos.leerArchivo();
        // console.log(datosVehiculos);            
        for (let i = 0; i < datosVehiculos.getCantidadFilas(); i++) {
            let vehiculo : string[] = datosVehiculos.getFila(i);
            switch (vehiculo[0]) {
                case 'Auto': 
                    this.vehiculos.push(new Auto(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5])));
                    break;
                case 'Camioneta': 
                    this.vehiculos.push(new Camioneta(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9])));
                    break;
                case 'Camion': 
                    this.vehiculos.push(new Camion(vehiculo[1],vehiculo[2],vehiculo[3],vehiculo[4],parseInt(vehiculo[5]),parseInt(vehiculo[9]),parseInt(vehiculo[10])));
                    break;
            }
        }
    }
    public mostrarVehiculos(posicion?: number): void {
        console.log('Registro Automotor');
        if (this.vehiculos.length > 0) {
            if (posicion===undefined) {
                for (let i = 0; i < this.vehiculos.length; i++) {
                    console.log(this.vehiculos[i].mostrar());            
                };
            } else {
                console.log(this.vehiculos[posicion].mostrar());            
            }
        } else {
            console.log('--VACIO--');
        }   
    }
    public guardarVehiculos() : void {
        let datosVehiculos: ManejoTextos = new ManejoTextos('vehiculos.txt','\n',';');
        datosVehiculos.limpiarDatos();
        this.vehiculos.forEach(vehiculo => {
            datosVehiculos.setFila(vehiculo.guardar());
        });
        datosVehiculos.grabarArchivo()
    }
}