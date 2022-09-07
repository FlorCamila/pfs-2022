// import Color from "../Librerias/color";
import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo {
   
    constructor(dominio: string, titular: string, marca: string, modelo:string, año:number) {
        super(dominio, titular, marca, modelo, año);
    }
    public mostrar() : string {
        return `Auto { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año}, propiedad de ${this.titular} }`;
    }
    public guardar(): string[] {
        let datos : string[] = [];
        datos.push('Auto');
        datos.push(super.getDominio());
        datos.push(super.getTitular());
        datos.push(super.getMarca());
        datos.push(super.getModelo());
        datos.push(super.getAñO().toString());           
        return datos;
    }
}