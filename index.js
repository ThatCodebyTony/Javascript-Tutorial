// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el")


let count = 0

function increment() {
    count = count + 1
    countEL.innerText = count
}

function save(){
    console.log(count)
}
// ----------------------------------------------
let username = "per"
let message = "You have tree new notifications"
console.log(message + ", " + username + "!")

let newMessage = message + ", " + username + "!"

let name = "Tony"
let greeting = "Hi, my name is"

let myGreating = greeting + " " + name
// ----------------------------------------------
console.log(4 + 5) //9
console.log("2" + "4") //24
console.log("5" + 1) //51
console.log(100 + "100") //100100
// ----------------------------------------------