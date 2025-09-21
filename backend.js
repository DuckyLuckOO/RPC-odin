let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        console.log("Rock");
        return 0;
    }
    else if (choice < 2/3) {
        console.log("Paper");
        return 1;
    }
    else {
        console.log("Scissors");
        return 2;
    }
}

function getHumanChoice() {
    let choice = parseInt(prompt("Choose Rock (0), Paper (1) or Scissors (2)"));
    switch(choice) {
        case 0: console.log("Rock");
                break;
        case 1: console.log("Paper");
                break;
        case 2: console.log("Scissors");
                break;
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let result = humanChoice-computerChoice;
    if (humanChoice == computerChoice) {
        console.log("This is a Tie !");
    }
    else if (result < 0 && result != -2 || result == 2) {
        console.log("You Lose this round !");
        computerScore += 1;
    }
    else {
        console.log("You Win this round !");
        humanScore += 1;
    }
    return;
}

function playGame() {
    let rounds = 0;
    while (rounds < 5) {
        
        playRound(getHumanChoice(), getComputerChoice());
        rounds+=1;
    }
    if (humanScore > computerScore) {
        console.log("You Won the Game")
    }
    else if (humanScore < computerScore) {
        console.log("You Lose this Game");
    }
    else {
        console.log("Nobody won this Game !")
    }
    return;

}

const computerSelection = getComputerChoice;

playGame();