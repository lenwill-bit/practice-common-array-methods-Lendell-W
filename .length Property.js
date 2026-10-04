// Task 1: Create the Order System
let drinks = ["Orange Juice", "Lemonade", "Iced Tea"];
let pastries = ["Danish", "Scone", "Cinnamon Roll"];

// Task 2: Log the number of drinks and pastries
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access Orders Using Bracket Notation
console.log(drinks[0], pastries[2]); // Orange Juice Cinnamon Roll
console.log(drinks[1], pastries[0]); // Lemonade Danish
console.log(drinks[2], pastries[1]); // Iced Tea Scone

// Task 4: Access Orders Dynamically with Variables
let drinkIndex = 1;
let pastryIndex = 2;
console.log(drinks[drinkIndex], pastries[pastryIndex]); // Lemonade Cinnamon Roll

// Task 5: Loop through all drinks
for (let i = 0; i < drinks.length; i++) {
  console.log(drinks[i]);
}

// Task 6: Add a New Order & Track Length
drinks[drinks.length] = "Flat White";
console.log("Updated number of drinks:", drinks.length); // 4

let newDrinkIndex = drinks.length - 1;
let newPastryIndex = 0;
console.log(drinks[newDrinkIndex], pastries[newPastryIndex]); // Flat White Danish