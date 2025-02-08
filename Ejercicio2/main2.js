// 2.1 Inserta dinámicamente en un html un div vacío con JavaScript.
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// 2.2 Inserta dinámicamente en un html un div que contenga una p con JavaScript.
const divWithP = document.createElement('div')
const pInsideDiv = document.createElement('p')
pInsideDiv.textContent = 'Soy un párrafo dentro de un div'
divWithP.appendChild(pInsideDiv)
document.body.appendChild(divWithP)

// 2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con JavaScript.
const divWith6P = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Párrafo ${i}`
  divWith6P.appendChild(p)
}
document.body.appendChild(divWith6P)

// 2.4 Inserta dinámicamente en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicP)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Element = document.querySelector('.fn-insert-here')
h2Element.textContent = 'Wubba Lubba dub dub'

// 2.6 Basándote en el array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me.
document
  .querySelectorAll('.fn-remove-me')
  .forEach((element) => element.remove())

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const middleP = document.createElement('p')
middleP.textContent = 'Voy en medio!'
const allDivs = document.querySelectorAll('div')
if (allDivs.length >= 2) {
  allDivs[0].insertAdjacentElement('afterend', middleP)
}

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here.
document.querySelectorAll('.fn-insert-here').forEach((div) => {
  const insideP = document.createElement('p')
  insideP.textContent = 'Voy dentro!'
  div.appendChild(insideP)
})
