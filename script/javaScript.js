/* 
Create function that returns random either Rock, Paper, Scissor

Create function that plays a single round of Rock paper Scissors
*/

let selectionEvent = document.querySelector("#selection")

let playerScore = 0
let computerScore = 0

selectionEvent.addEventListener('click', function(event) {
    let roundAnnouncement = document.querySelector("#round-result")
    let playerScoreDisplayed = document.querySelector("#player-score")
    let computerScoreDisplayed = document.querySelector("#computer-score")

    if (event.target.id !== "selection") {
        let round = playRound(event.target.id, getComputerChoice())

        roundAnnouncement.textContent = round

        if(round.indexOf("Win!") >= 0) {
            playerScore = playerScore += 1
            playerScoreDisplayed.textContent = `Players score is: ${playerScore}`
        }
        else if (round.indexOf("Draw") < 0) {
            computerScore = computerScore += 1
            computerScoreDisplayed.textContent = `Computer score is: ${computerScore}`
        }

        checkScore(playerScore, computerScore)
    }
    else roundAnnouncement.textContent = "Click on buttons!"
    
})

function getComputerChoice () {
    let computerHand = ["Rock", "Paper", "Scissor"]
    
    return computerHand[Math.floor(Math.random() * computerHand.length)]
}


function playRound (playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissor") {
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissor") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors beats Paper"
    }
    else {
        return "Draw!"
    }
}

function checkScore (playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        let containerText = document.querySelector("#round-result")
        playerScore > computerScore ? containerText.textContent = "Player won!" : containerText.textContent = "Computer won!"
    }
}