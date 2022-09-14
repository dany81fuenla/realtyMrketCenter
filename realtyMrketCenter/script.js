const boton = document.getElementById("switch")   //capturamos el boton del cambio de color

boton.addEventListener('click', ()=>{              //escuchamos el evento 'click' para agregar la clase dark y cambiar el color del body
    document.body.classList.toggle('dark');
})
        
    

