export default abstract class Animal {
    protected posicion: number;
    protected energia: number;
    protected encerrado : boolean;

    constructor() {
        this.posicion=1;
        this.energia=0;
        this.encerrado=true;
    }
    abstract moverse(): void;
    abstract comer(): void;
    public getPosicion(): number {
        return this.posicion;
    }
    public getEnergia(): number {
        return this.energia;
    }
    public setEncerrado(encerrado: boolean) : void {
        this.encerrado=encerrado;
    }
}