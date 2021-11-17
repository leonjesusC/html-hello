

let suit = ["spade", "club", "heart", "diamond"]

let thing = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let rand_suit = ""

let rand_thing = ""

let suit_symbol = ""

function generateRandoms () {

    rand_suit = suit[Math.floor(Math.random() * suit.length)];
    rand_thing = thing[Math.floor(Math.random() * thing.length)]

    suit_symbol = (rand_suit === "spade") ? "♠" : 
                (rand_suit === "club") ? "♣" :
                (rand_suit === "heart") ? "♥" :
                (rand_suit === "diamond") ? "♦" :
                ""


    console.log("The random thing is " + rand_thing + " and the random suit is " + suit_symbol + ".") 

    return ""

}



window.onload = function () {

    generateRandoms()

    let internal = `<h1>${suit_symbol}</h1> <p>${rand_thing}</p> <h2>${suit_symbol}</h2>`

    let bigCard = document.querySelector("#cardy")
    
    let content = document.createElement("div")

    content.classList.add(`${rand_suit}`)
    
    content.innerHTML = `${internal}`
    
    bigCard.appendChild(content)

}
