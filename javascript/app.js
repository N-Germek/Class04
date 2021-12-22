let amount = prompt("How many bags would you like to purchase?")
let message = ""

if (amount < 2) {
    message = "Fairweather Coffee fan? ...you can do better."
}
else {
    message = "A true Coffee Connoisseur."
}

document.write(message);