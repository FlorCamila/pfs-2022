import Animal from "./animal";
import Mascota from "./mascota";
import Sonoro from "./sonoro";

export default class Canario extends Animal implements Mascota, Sonoro {
    private nombre: string;
    constructor(nombre: string) {
        super();
        this.nombre=nombre;
    }
    public moverse(): void {
        if (this.controlarConfinamiento())
            this.posicion += 1;
    }
    public comer(): void {
        this.energia += 1;
    }
    public sonido(): string {
        return 'Canto';
    }
    public comerLoQueLeDan(): number {
        return 1;
    }
    public controlarConfinamiento(): boolean {
        return true;
    }
}