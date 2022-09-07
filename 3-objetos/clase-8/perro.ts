import Animal from "./animal";
import Mascota from "./mascota";
import Sonoro from "./sonoro";

export default class Perro extends Animal implements Mascota, Sonoro {
    private nombre: string;
    constructor(nombre: string) {
        super();
        this.nombre=nombre;
    }
    public moverse(): void {
        if (this.controlarConfinamiento())
            this.posicion += 1;
        else
            this.posicion += 10;
    }
    public comer(): void {
        this.energia += this.comerLoQueLeDan();
    }
    public comerLoQueLeDan(): number {
        return 10;
    }
    public sonido(): string {
        return 'Ladrido';
    }
    public controlarConfinamiento(): boolean {
        return (this.encerrado)
    }
}