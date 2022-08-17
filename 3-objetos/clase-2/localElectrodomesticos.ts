import Aire from './aire'

export default class LocalElectrodomesticos{
    private nombre:string;
    private aires:Aire[];

    public constructor (nombre:string){
        this.nombre=nombre;
        this.aires=[];
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombre: string):void {
        this.nombre = nombre;
    }

    //CRUDF
    public createAires (aire:Aire):void{
        if(aire){
            this.aires.push(aire);
        }
    }

    public readAires():Aire[]{
        let aires:Aire[] = [];
        this.aires.forEach(aire =>{
            aires.push(aire)
        });
        return aires;
    }

    public updateAires(aire:Aire, posicion: number):void{
        if(aire){
            this.aires[posicion] = aire;
        }
    }

    public deleteAires(posicion:number) : void{
        if(this.aires[posicion]){
            this.aires.splice(posicion,1);
        }
    }

    public readAiresTxt():string{
        let textoAires:string = "";
        this.aires.forEach(aire =>{
            textoAires += aire.imprimir() + '\n'
        });
        return textoAires;
    }
}