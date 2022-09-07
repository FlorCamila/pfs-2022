import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidad: number = 0;

    constructor (dominio: string, titular: string, marca: string, modelo:string, año:number, capacidad? : number) {
        super(dominio, titular, marca, modelo, año);
        if (capacidad) this.capacidad=capacidad;
    }

    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public mostrar() : string {
        return `Camioneta { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año}, propiedad de ${this.titular}, posee ${this.capacidad} de capacidad}`;
    }
    public guardar(): string[] {
        let datos : string[] = [];
        datos.push('Camioneta');
        datos.push(super.getDominio());
        datos.push(super.getTitular());
        datos.push(super.getMarca());
        datos.push(super.getModelo());
        datos.push(super.getAñO().toString());           
        datos.push(this.getCapacidad().toString());
        return datos;
    }
}