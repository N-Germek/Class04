let CoffeeBeans = 5;

let allowedToOrder = 10;

// Incrementors
console.log( allowedToOrder );

// variable++ happens AFTER the code is done
console.log( allowedToOrder++ );
console.log( allowedToOrder );

// ++variable happens BEFORE the code runs
console.log( ++allowedToOrder );

allowedToOrder = allowedToOrder + 4;
console.log(allowedToOrder);

// Execute the statement(s) in the code block a certain number of times
// 1 - declare a counter
// 2 - declare how many times it runs -- what is the stopping point?
// 3 - declare how fast it goes (increments)

for ( let i = 9; i <= allowedToOrder; i++ ) {
  console.log(i + " -- times");
}


// While Loop runs until some "condition" evaluates to true


while(CoffeeBeans > 0) {
  // --CoffeeBeans;
  console.log(CoffeeBeans-- + " Pairs nicely with this pastry.");
  // CoffeeBeans++;
}


// until the person guesses right, keep on prompting
// While the guess is wrong, ask again

let coffee = "I'll take two";
let Thanks = false;  // this is known as a "flag"

while( Thanks === false ) { 
  let guess = prompt("How many types of coffee do we have?");
  if( guess === Thanks ) {
    Thanks = true;
  }
}

console.log("Here is two on the house, Happy Holidays.");