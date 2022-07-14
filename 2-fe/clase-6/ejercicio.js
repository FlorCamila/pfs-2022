let boton = document.querySelector('#boton');
let lista = document.querySelector('#lista');
let checks = document.querySelectorAll('.valores');

boton.addEventListener('click', function(){
    lista.innerHTML = '';
    checks.forEach((e)=>{
        if(e.checked == true){
            let elemento = document.createElement('li');
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);
        }
    });
})





