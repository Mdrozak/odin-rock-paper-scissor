/* 
Create function that returns random either Rock, Paper, Scissor

Create function that plays a single round of Rock paper Scissors
*/

let selectionEvent = document.querySelector("#selection")

let playerHand = selectionEvent.addEventListener('click', function(event) {
    if (event.target.id !== "selection") return playRound(event.target.id, getComputerChoice())
    else console.log("click on buttons!")
})

function getComputerChoice () {
    let computerHand = ["Rock", "Paper", "Scissor"]
    
    return computerHand[Math.floor(Math.random() * computerHand.length)]
}


function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        console.log("You Lose! Paper beats Rock")
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor") {
        console.log("You Win! Rock beats Scissors")
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        console.log("You Win! Paper beats Rock")
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissor") {
        console.log("You Lose! Scissors beats Paper")
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock") {
        console.log("You Lose! Rock beats Scissors")
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper") {
        console.log("You Win! Scissors beats Paper")
        return "You Win! Scissors beats Paper"
    }
    else {
        console.log("Draw!")
        return "Draw!"
    }
}

function playGame () {

}

playGame()