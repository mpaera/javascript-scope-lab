// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block-scoped variable
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

// Call the functions
addBurger();
changeFeaturedDrink();

// Print output
console.log(burgers);
console.log(featuredDrink);