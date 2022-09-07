import Animal from "./animal";
import Mascota from "./mascota";

export default class Pez extends Animal implements Mascota {
    private nombre: string;
    constructor(nombre: string) {
        super();
        this.nombre=nombre;
    }
    public moverse(): void {
        this.posicion += 2;
    }
    public comer(): void {
        this.energia += this.comerLoQueLeDan();
    }
    public comerLoQueLeDan(): number {
        return 2;
    }
    public controlarConfinamiento(): boolean {
        return true;
    }
}