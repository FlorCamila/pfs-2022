let form = document.querySelector('.formulario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nombre = document.querySelector('#nombreInput').value;
    let apellido = document.querySelector('#apellidoInput').value;
    let mensaje = document.querySelector('#mensajeInput').value;
    // let email = document.querySelector('#emailInput').value;
    // let expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

    if((nombre.length < 3) || (nombre.length >20) ){
        console.log('El nombre debe contener mas de 3 letras y menos de 20');
    }

    if ((apellido.length < 3) ||(apellido.length>20)){
        console.log('El apellido debe contener mas de 3 letras y menos de 20');
    }

    if(mensaje === ""){
        console.log('No puede estar vacio, escriba un mensaje');
    }
    
    // if(!expRegular.test(email)){ /*Cuando no se cumpla esa expresion...*/
    //     console.log('El correo no es valido');
    // }
})