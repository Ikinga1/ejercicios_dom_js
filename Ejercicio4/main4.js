// 1.1 Añadir un botón con id "btnToClick" y agregar un evento click
const button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Haz Click!'
document.body.appendChild(button)

button.addEventListener('click', (event) => {
  console.log('Evento Click:', event)
})

// 1.2 Agregar un evento 'focus' al input con la clase .focus
const focusInput = document.querySelector('.focus')
focusInput.addEventListener('focus', () => {
  console.log('Valor del input en focus:', focusInput.value)
})

// 1.3 Agregar un evento 'input' al input con la clase .value
const valueInput = document.querySelector('.value')
valueInput.addEventListener('input', () => {
  console.log('Valor actual del input:', valueInput.value)
})
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

// Crear una lista ul
const albumList = document.createElement('ul')

// Recorrer el array y crear un elemento li para cada álbum
albums.forEach((album) => {
  const li = document.createElement('li')
  li.textContent = album
  albumList.appendChild(li)
})

// Agregar la lista al body del documento
document.body.appendChild(albumList)
