import Telefono from "./telefono";

export default class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number;

    public constructor(bateriaActual:number, marca:string, memoria:number, color:string){
        super(bateriaActual, marca, memoria, color);
    }

    public verFrecuenciaActual(numero:number):void{
        this.frecuenciaActual = numero;
    }
    
}