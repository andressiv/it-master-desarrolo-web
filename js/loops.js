// array, arreglo, matrix, lista, vector
//0=A
//1=N
//2=D8

var nombre = [
    'Andres',
    'Ernesto',
    'Sivira',

]
var mixto = [
    'soy un string',
    123,
    true,
    null,
    []
]

mixto.push('nuevo dato')


//iteraciones
// desde - 0
// hasta - 9
// salto - 1

for (var i = 0; i < mixto.length; i++) {
      console.log( mixto[i] )
}

// 1 era - i = 0 - si - ejecuta
// 2 da - i = 1 - si - ejecuta
// ...
// 10ma - i= 9 - no
// array asociativo
var usarios = {
    primerNombre : 'Alejandro',
    segundoNombre : 'Ernesto',
    apellido : 'Sivira',
    altura : 1.78,
    esExtrajero : false,


}


var link = '<a href="#home">... <a/> '

var linksContainer = document.querySelector('.second-nav-links')

console.log(linksContainer)

var links = [
{
    href : '#Home',
    name : 'Home' , 

},
{
  href : '#Contacto',
  name : 'Contacto',
},
{
   herf : '#Nosotros',
   name : 'Nosotros',
},
{
   herf : '#Productos',
   name : 'Productos' , 
},
]



for (var i= 0; i <links.length; i++) {
    linksContainer.innerHTML += '<a href="#' + links[i],href + '"> ' + links[i].name + '</a>'

}