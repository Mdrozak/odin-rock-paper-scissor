/* 
Create function that returns random either Rock, Paper, Scissor

Create function that plays a single round of Rock paper Scissors
*/



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

function getPlayerChoice () {
    const playerSelection = prompt("To start a game write one of following Rock, Paper, Scissor");
    return playerSelection
}

function playGame () {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        
        let checRoundWinner = playRound(playerSelection, computerSelection);

        if (checRoundWinner.indexOf("Win!") != -1) playerScore += 1
        else if (checRoundWinner != "Draw!") computerScore += 1
    }

    playerScore > computerScore ? console.log(`You have won with score ${playerScore}`) : 
    computerScore > playerScore ? console.log(`Computer won with score ${computerScore} (your score ${playerScore})`) : 
    console.log(`Draw you and computer had same score of ${playerScore}`)



}

playGame()