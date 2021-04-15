// DATOS
// Variables y/o Constantes
// Tipo de dato y dato

// Tipo de dato = Undefined
var nombre

// Tipo de dato es string (cadena de caracteres)
var primerNombre = 'Andres'
var segundoNombre = 'Ernesto'
var apellido = 'Sivira'

// Concatenar
var nombreCompleto = primerNombre + ' ' + segundoNombre + ' ' + apellido 
var cantidadDeLetras = nombreCompleto.length

console.log(nombreCompleto)
console.log(cantidadDeLetras)


// Tipo de dato es number 
var edad = 12
var altura = 1.78

// Tipo de dato boolean (false, true)
var esExtranjero = true
var esMayorDeEdad = edad > 17

if(esMayorDeEdad){
    console.log('Puedes acceder al sitio')


} else {
    console.log('te redirigemos a otra pagina...')
}

// Logica / Condicionales
if ( esExtranjero == true ) {

console.log('Bienvenido a nuestro pais')
}

else {
    console.log('Hola compatriota')
}


// Eventos
var cartelCookie =  document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false

if (mostrarMensaje) {
    document.querySelector('.cookie').style.display = 'none'
}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

//Envio 
var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function() {
   
    botonDeEnviar.parentElement.remove()
    
   let parrafo = document.createElement('p')

   parrafo.innerHTML = 'hemos recibido la sup'
    
   document.querySelector('#footer').appendChild(parrafo)
    })

    console.log(botonDeEnviar)