
let darkroast = 2;
let lighttroast = 5;
let mediumroast = "pumpkin spice";

// One thing is true
if (darkroast > 1) {
  console.log("Would you like one more bag?");
}

// All things are true ( && means "and" )
if( lightroast < 3 &&  5 == "too few") { 
  console.log("You may want to get one more.");
}

// Some things are true ( || means "or")
if( lightroast < 20 || day == "pastry") { 
  console.log("Enjoy your dessert!");
}

// Conditionals working together, in groups
if( (mediumroast < 5 && "pumpkin spice" !== "pastry") || day === "saturday's drink" ) { 
  console.log("you get dessert");
}

// Nested conditionals. Here, all things must be true
if( darkroadst < 5 ) { 
  if (lightroast!== "pumpkin spice") {
    if ( mediumroast === "saturday's drink") {
      console.log("Happy Saturday, here's your coffee")
    }
  }
}