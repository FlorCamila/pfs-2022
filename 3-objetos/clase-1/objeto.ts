class Aire{
    private encendido:boolean;
    private temperatura:number;
    private temporizador:boolean;
    private modo:string;
    private marca:string;

    public constructor(temporizador:boolean, modo:string, marca?:string){ //agregue como parametro opcional la marca
        this.temporizador = temporizador;
        this.modo = modo;
        if(marca == undefined){
            this.marca = "Sin marca";
        }else{
            this.marca = marca;
        }
    }

    public encenderApagar():void{
        if(this.encendido){
            this.encendido = false;
        }else{
            this.encendido = true;
        }
    }

    public subirTemperatura():void{
        this.temperatura +=1;
    }

    public bajarTemperatura():void{
        this.temperatura -=1;
    }

}

let sinTemporizador:boolean = false; //variable asigna que el aire no tiene temporizador
let modoPrincipal:string = "Calor"; //variable asigna que solo tiene modo calor

let miAire = new Aire (sinTemporizador, modoPrincipal); //creo objeto y coloco los parametros correspondiente al constructor creado
miAire.encenderApagar(); // coloco que miAire tambien cumple las otras funciones
miAire.subirTemperatura(); // coloco que miAire tambien cumple las otras funciones
miAire.bajarTemperatura(); // coloco que miAire tambien cumple las otras funciones

let otroAire : Aire = new Aire(sinTemporizador, modoPrincipal, "Dream"); // constructor de clase

console.log(miAire); // veo por consola let miAire = new Aire (sinTemporizador, modoPrincipal); 
console.log(otroAire); // veo por consola let otroAire : Aire = new Aire(sinTemporizador, modoPrincipal, "Dream");
