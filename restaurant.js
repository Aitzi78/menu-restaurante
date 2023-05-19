const entree ={
  "percebes": 26,
  "kokotxas": 24
};

const sides = {
 "fritos": 9,
 "tortilla": 12
};
/* mostrar mmenu */
const menuItems = menu =>{
  let menuString =[]
  Object.keys(menu).map(item =>{
    menuString.push(`${item}`)
  })
  return menuString.join()
}
 
const entreeComments ={
  "percebes": "Excelente opcion",
  "kokotxas": "La mejor opcion"
}

const sidesComments ={
  "fritos": "Autenticas croquetas",
  "tortilla": "recien hecha"
}
console.log("Bienvenido al restaurante Bottega");
console.log(`El menu de hoy es ${menuItems(entree)} y de acompañamiento ${menuItems(sides)}`)

const entreeOpcion = prompt(¿Que desea?)

console.log(`el ${entreeOpcion} ${entreeComments[entreeOpcion]}`)
console.log(`${entreeOpcion} es ${entree[entreeOpcion]}`)

const sideOpcion = prompt("que quiere de acompañamiento?")

console.log(`sidesComments[sidesOpcion]}`)
console.log(`tu acompañamiento es ${sides[sideOpcion]}`)
/* precio total */
const total = (entree[entreeOpcion] + sides[sideOpcion])

console.log(`èl total de este ${entreeOpcion} y {sideOpcion} será ${total}`)
