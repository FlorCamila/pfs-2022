// Cree una pagina con un input, un checkbox y un boton. Al presionar el boton, si el checkbox está seleccionado debe aparecer un saludo en un h1 y sino en un h2.
let boton = document.querySelector('.btn');

boton.addEventListener('click', () =>{
    
    let texto = document.querySelector('#textInput');
    let saludo;
    
    if(document.querySelector('#h1').checked){
        saludo = document.createElement('h1');
    }else{
        saludo = document.createElement('h2');
        }
        
        saludo.innerHTML = texto.value;
        let contenedor = document.querySelector('.contenedor');

        while(contenedor.firstChild){
            contenedor.removeChild(contenedor.firstChild);
        }
        contenedor.appendChild(saludo);
    
})
