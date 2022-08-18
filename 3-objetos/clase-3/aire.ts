export default class Aire{
    private marca:string;
    private precio:number;
    private temporizador:string;
    private modo:string;

    public constructor(marca:string, precio:number, temporizador:string, modo:string){ 
       this.marca=marca;
       this.precio=precio;
       this.temporizador=temporizador;
       this.modo=modo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string):void{
        this.marca = marca;
    }

    public getPrecio(): number{
        return this.precio;
    }

    public setPrecio(precio:number):void{
        this.precio = precio;
    }

    public getTemporizador(): string {
        return this.temporizador;
    }

    public setTemporizador(temporizador: string):void {
        this.temporizador = temporizador;
    }

    public getModo(): string{
        return this.modo;
    }

    public setModo(modo: string):void {
        this.modo = this.modo;
    }

    public imprimir() :string{
        return `Aire marca: ${this.getMarca()}, precio: $${this.getPrecio()}, temporizador: ${this.getTemporizador()} y con modo: ${this.getModo()}`;
    }
}