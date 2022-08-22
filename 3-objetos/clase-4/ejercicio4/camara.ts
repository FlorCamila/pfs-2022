import Telefono from "./telefono";

export default class TelefonoConCamara extends Telefono{
    private encendidaApagada:string;

    public constructor(bateriaActual:number, marca:string, memoria:number, color:string, encendidaApagada:string){
        super(bateriaActual, marca, memoria, color);
        this.encendidaApagada=encendidaApagada;
    }

    public sacarFoto():void{
        if(this.encendidaApagada == "Encendida"){
            console.log("Sacando foto")
        }else{
           console.log("No puede sacar foto ya que esta apagada");
        }
    }
    
}