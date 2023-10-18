// Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, deberá mostrar en la 
// sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar
//  con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías, Estudiante,
//  Trainee, Junior

//tomo los elementos html
    const inputName = document.getElementById('name');
    const inputLastname = document.getElementById('lastname');
    const inputMail = document.getElementById('mail');
    const buttonResumen = document.getElementById('resumen');
    const buttonBorrar = document.getElementById('borrar');
    const inputCantidad = document.getElementById("cantidad");
    const optionCategoria = document.getElementById("categoria");
    const totalPagarTexto = document.getElementById("totalPagar");
    const mensaje = document.getElementById("mensaje");

//defino variables
//guardo descuentos
    const descuentoEst = 80;
    const descuentoTra = 50;
    const descuentoJun = 15;

//descuento por defecto
    let descuento = descuentoEst;


    const precio = 200;
    let totalPagarNum = 0;

//inicio mensaje
    let texto = ""
    let error = false

//evento cambio cantidad
    inputCantidad.addEventListener("input",cambioCantidad);
    inputCantidad.addEventListener("change",cambioCantidad);
//evento seleccion categoría
    optionCategoria.addEventListener("change", cambiarCategoria);

//evento click borrar
    buttonBorrar.addEventListener("click", ()=>{
        mostrarMensaje("Borrado")
    });

//evento click resumen
    buttonResumen.addEventListener("click", hacerResumen);
    
function cambioCantidad(){
    if(inputCantidad.value < 0){
        inputCantidad = 0
    }
}

    function cambiarCategoria(){
        if (optionCategoria.value == "trainee"){
            descuento = descuentoTra
        } else if (optionCategoria.value == "junior"){
            descuento = descuentoJun
        }else{
            descuento = descuentoEst
        }        
    }

    function hacerResumen() {    //si no están los imputs vacíos
        if (inputName.value.trim() === "" || inputLastname.value.trim() === "" || inputMail.value.trim() === "" ){
                error = true;
                if(inputName.value.trim() === "") {texto = "Ingrese el nombre";
                mostrarMensaje(texto, error);
                return};
                if(inputLastname.value.trim() === "") {texto = "Ingrese el apellido"
                mostrarMensaje(texto, error);
                return};
                if(inputMail.value.trim() === "") {texto = "Ingrese el mail"
                mostrarMensaje(texto, error);
                return};
        }else{
            let cantidadElegida = inputCantidad.value;
            if (cantidadElegida <= 0) {
                texto = "Ingrese una cantidad mayor a cero";
                error = true;
            } else {
            totalPagarNum = (precio - precio * descuento / 100) * cantidadElegida
            totalPagarTexto.textContent = `Total a Pagar: $${totalPagarNum}`;
            texto = "Guardado"
            }
        }
        mostrarMensaje(texto, error)
    }

    function mostrarMensaje(texto, errar){
        mensaje.textContent = texto
        if (errar){
            mensaje.style.color = "yellow"
            mensaje.style.background = "red"
        }
        setTimeout(function() {
            mensaje.textContent = "";
            mensaje.style.color = "black"
            mensaje.style.background = "white"
            texto = ""
            error = false
        }, 3000);
    }
 