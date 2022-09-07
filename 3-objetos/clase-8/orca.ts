import Animal from "./animal";
import Sonoro from "./sonoro";

export default class Orca extends Animal implements Sonoro {
    private nombre: string;
    constructor(nombre: string) {
        super();
        this.nombre=nombre;
    }
    public moverse(): void {
        this.posicion += 2;
    }
    public comer(): void {
        this.energia += 100;
    }
    public sonido(): string {
        return 'Silbido';
    }
}