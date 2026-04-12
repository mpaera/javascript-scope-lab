const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

// Temporary test output
console.log("Before addBurger:", burgers);

addBurger();
console.log("After addBurger:", burgers);

console.log("Before change:", featuredDrink);

changeFeaturedDrink();
console.log("After change:", featuredDrink);