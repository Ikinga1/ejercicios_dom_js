// 1.1 Crear una lista ul > li con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const countryList = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  countryList.appendChild(li)
})

document.body.appendChild(countryList)

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const removeElement = document.querySelector('.fn-remove-me')
if (removeElement) {
  removeElement.remove()
}

// 1.3 Crear una lista ul > li dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const carList = document.createElement('ul')
const targetDiv = document.querySelector('[data-function="printHere"]')

cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  carList.appendChild(li)
})

if (targetDiv) {
  targetDiv.appendChild(carList)
}

// 1.4 Crear divs con h4 (título) y img (imagen)
const countriesInfo = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.createElement('div')
container.id = 'countries-container'

countriesInfo.forEach((country) => {
  const countryDiv = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = country.title
  const img = document.createElement('img')
  img.src = country.imgUrl

  countryDiv.appendChild(h4)
  countryDiv.appendChild(img)
  container.appendChild(countryDiv)
})

document.body.appendChild(container)

// 1.5 Crear un botón que elimine el último elemento de la serie de divs
const removeLastButton = document.createElement('button')
removeLastButton.textContent = 'Eliminar último elemento'
removeLastButton.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('#countries-container div')
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
})

document.body.appendChild(removeLastButton)

// 1.6 Crear un botón dentro de cada div para eliminar ese mismo div
document.querySelectorAll('#countries-container div').forEach((div) => {
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Eliminar este'
  deleteButton.addEventListener('click', () => {
    div.remove()
  })
  div.appendChild(deleteButton)
})
