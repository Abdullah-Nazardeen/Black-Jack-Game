let player = {
    name:"Abdullah",
    chips:195
}
let hasBlackJack = false
let isAlive = false
let sum = 0
let cards = []
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
function start() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    hasBlackJack = false
    isAlive = true
    sum = firstCard + secondCard
    cards =[firstCard,secondCard]
    renderGame()
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber > 10) { return 10 }
    else if (randomNumber < 2) { return 11 }
    return randomNumber
}
function renderGame() {
    cardsEl.textContent = "Cards"
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += " : " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    
    }
    else if (sum === 21) {
        message = "wohoo! you have got black jack!"
        hasBlackJack = true
    }
    else {
        message = "you're out of the game!!!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
       let Card = getRandomCard()
       sum += Card
       cards.push(Card)
       renderGame()
       console.log(cards)
    }
}



