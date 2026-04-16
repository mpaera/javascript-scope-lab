// Declare variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a burger
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// If statement (IMPORTANT: no space in if(true))
if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

// Expose variables/functions for testing (Node environment)
global.burgers = burgers;
global.featuredDrink = featuredDrink;
global.addBurger = addBurger;
global.changeFeaturedDrink = changeFeaturedDrink;