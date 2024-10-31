// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")


let count = 0

function increment() {
    count += 1
    countEL.innerText = count
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
}
// ----------------------------------------------
// let username = "per"
// let message = "You have tree new notifications"
// console.log(message + ", " + username + "!")

// let newMessage = message + ", " + username + "!"

// let name = "Tony"
// let greeting = "Hi, my name is"

// let myGreating = greeting + " " + name
// ----------------------------------------------
console.log(4 + 5) //9
console.log("2" + "4") //24
console.log("5" + 1) //51
console.log(100 + "100") //100100
// ----------------------------------------------


let welcomeEl = document.getElementById("welcome-el")
let name = "Per Dude"
let greeting = "Welcome back, "
let myGreeting = greeting + name
welcomeEl.innerText = myGreeting
welcomeEl.innerText += " " + "👋" + "Homie"
