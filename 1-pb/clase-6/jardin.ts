// • El jardín infantil necesita un programa para poder asignar cursos a las aulas • Se cuentan con tres aulas: Azul, Verde y Amarilla • Cada aula cuenta con una capacidad diferente (es decir, un número de bancos) • La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30 • Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos • La salida del algoritmo es el color que identifica al aula asignada


import * as rls from 'readline-sync';

function salasJardin (){
    let numeroAlumnos : number = rls.questionInt("Ingrese el numero de alumnos a ingresar: ");

    if(numeroAlumnos === 40 || numeroAlumnos > 35){
        console.log ("Ingresan a la sala Azul")
    }else if (numeroAlumnos === 35 || numeroAlumnos > 30 ){
        console.log("Ingresan a la sala Verde")
    }else {
        console.log("Ingresan a la sala Amarilla")
    }
}

salasJardin();