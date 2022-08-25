export default class Telefono{
    private encendidoApagado:string;
    private bateriaActual:number;
    private marca:string;
    private memoria:number;
    private color:string;
    private numero:number;

    public constructor (bateriaActual:number, marca:string, memoria:number, color:string){
        this.bateriaActual=bateriaActual;
        this.marca=marca;
        this.memoria=memoria;
        this.color=color;
    }

    public prenderCelular():void{
        this.encendidoApagado = "Encendido";
    }

    public apagarCelular():void{
        this.encendidoApagado = "Apagado";
        this.numero = 0;
    }

    public getBateriaActual(): number{
        return this.bateriaActual;
    }

    public setBateriaActual(bateriaActual: number) :void{
        this.bateriaActual = bateriaActual;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setMarca(marca: string):void {
        this.marca = marca;
    }

    public getMemoria(): number{
        return this.memoria;
    }

    public setMemoria(memoria: number):void {
        this.memoria = memoria;
    }

    public getColor(): string{
        return this.color;
    }

    public setColor(color: string):void {
        this.color = color;
    }

    public getNumeroLlamado(): number {
        return this.numero;
    }

    public setNumeroLlamado(numeroLlamado: number) :void{
        this.numero = numeroLlamado;
    }

    public hacerLlamada(numero:number):void{
        if(this.encendidoApagado = "Encendido"){
            this.numero = numero;
        }else{
            console.log("No se puede llamar ya que el celular esta apagado");
        }
    }

    public mandarMensaje(numero:number):void{
        if(this.encendidoApagado = "Encendido"){
            this.numero = numero;
        }else{
            console.log("No se puede mandar mensaje ya que el celular esta apagado");
        }
    }
}