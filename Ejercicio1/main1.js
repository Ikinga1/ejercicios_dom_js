// 1.1 Seleccionar y mostrar el botón con la clase .showme
const button = document.querySelector('.showme')
console.log(button)

// 1.2 Seleccionar y mostrar el h1 con el id #pillado
const h1Element = document.querySelector('#pillado')
console.log(h1Element)

// 1.3 Seleccionar y mostrar todos los elementos <p>
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

// 1.4 Seleccionar y mostrar todos los elementos con la clase .pokemon
const pokemonElements = document.querySelectorAll('.pokemon')
console.log(pokemonElements)

// 1.5 Seleccionar y mostrar todos los elementos con el atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]')
console.log(testMeElements)

// 1.6 Seleccionar y mostrar el tercer elemento con el atributo data-function="testMe"
const thirdTestMeElement = document.querySelectorAll(
  '[data-function="testMe"]'
)[2]
console.log(thirdTestMeElement)
