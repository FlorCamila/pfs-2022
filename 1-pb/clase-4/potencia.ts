// Realice un programa que devuelva la potencia de un numero.

function potencia (base : number, exponente: number){

    // Declaramos variable resultado, donde 1 seria el minimo resultado posible
    let resultado : number = 1;

    // Por cada vez se incia el ciclo se actualizara el valor de la variable resultado al multiplicar por base y se retorna resultado
    for(let i : number =0; i<exponente; i++){
        resultado *= base;
    }

    return resultado; 

}

// Llamamos al metodo
console.log (potencia (3,4));
