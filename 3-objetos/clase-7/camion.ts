import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo {
    private capacidad: number = 0;
    private cantidadEjes: number = 2;
    
    constructor (dominio: string, titular: string, marca: string, modelo:string, año:number, capacidad? : number, ejes? : number) {
        super(dominio, titular, marca, modelo, año);
        if (capacidad) this.capacidad=capacidad;
        if (ejes) this.cantidadEjes=ejes;
    }
    
    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public getCantidadEjes(): number { return this.cantidadEjes; }
    public setCantidadEjes(cantidadEjes: number): void { this.cantidadEjes = cantidadEjes; }
    public mostrar() : string {
        return `Camion { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año}, propiedad de ${this.titular}, posee ${this.capacidad} de capacidad y ${this.cantidadEjes} ejes }`;
    }
    public guardar(): string[] {
        let datos : string[] = [];
        datos.push('Camion');
        datos.push(super.getDominio());
        datos.push(super.getTitular());
        datos.push(super.getMarca());
        datos.push(super.getModelo());
        datos.push(super.getAñO().toString());           
        datos.push(this.getCapacidad().toString());
        datos.push(this.getCantidadEjes().toString());
        return datos;
    }
}