const menu = {
    main: [
        {name: "Pasta", price: 12},
        {name: "Rissotto", price:14},
    ],
    side: [
        {name: "Ensalada", price: 7},
        {name: "Patatas", price: 6},
    ],
    comments: [
        "Excente",
        "Nuestra especialidad",
    ],
       
    
};
*/ mostrar menu */

function displayMenu() {
    console.log("Menu principal");
    menu.main.forEach((item, index) => console.log(`${index + 1}. ${item.name}`));

     console.log("\nMenú de Acompañamientos:");
    menu.side.forEach((item, index) => console.log(`${index + 1}. ${item.name}`));
  }
displayMenu();

*/  calcular el precio total */

  function calculateTotal(mainPrice, side1Price, side2Price) {
    return mainPrice + side1Price + side2Price;
  }

/* obtener comentarios aleatorios */

  function getRandomComment() {
    return menu.comments[Math.floor(Math.random() * menu.comments.length)];
  }
  
