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
    count = 0
    countEL.innerText = 0
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


// ----------------------------------------------

// Calculator
// let num1 = 8
// let num2 = 2

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")

// // Create four functions: add(), subtract(), divide(), multiply()

// function add(){
//     sumEl.textContent = num1+num2
// }
// function subtract(){
//     sumEl.textContent = num1-num2
// }
// function divide(){
//    sumEl.textContent = num1/num2
// }
// function multiply(){
//     sumEl.textContent = num1*num2
// }
//----------------------------------------------