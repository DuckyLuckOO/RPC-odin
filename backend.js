
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

// function getHumanChoice() {
//     let choice = parseInt(prompt("Choose Rock (0), Paper (1) or Scissors (2)"));
//     switch(choice) {
//         case 0: console.log("Rock");
//                 break;
//         case 1: console.log("Paper");
//                 break;
//         case 2: console.log("Scissors");
//                 break;
//     }
//     return choice;
// }

function playRound(humanChoice, computerChoice) {
    
    let result = humanChoice-computerChoice;
    let winner = document.getElementById("Result");
    let score= document.getElementById("value");
    let finished = false;
    let scoreText = "0 - 0";
    
    if (humanChoice == computerChoice) {
        
        document.body.style.backgroundColor = "white";
        setTimeout(() => {
            document.body.style.backgroundColor = "#FFEAAE";
            }, 300);

        winner.textContent="You Tied !"
        score.textContent = scoreText;
        
    }
    else if (result < 0 && result != -2 || result == 2) {
        
        document.body.style.backgroundColor = "#eb3030be";
        setTimeout(() => {
            document.body.style.backgroundColor = "#FFEAAE";
            }, 300);
        winner.textContent="You Lost !"
        computerScore += 1;
        
      
    }
    else {
        
        document.body.style.backgroundColor = "#15cc2dc2";
        setTimeout(() => {
            document.body.style.backgroundColor = "#FFEAAE";
            }, 300);
        winner.textContent="You Win !"
        humanScore += 1;
        
        
    }

    scoreText = humanScore.toString()+ " - " + computerScore.toString();
    score.textContent = scoreText;
    return;

}

// function playGame() {
//     let rounds = 0;
//     while (rounds < 5) {
        
//         playRound(getHumanChoice(), getComputerChoice());
//         rounds+=1;
//     }
//     if (humanScore > computerScore) {
//         console.log("You Won the Game")
//     }
//     else if (humanScore < computerScore) {
//         console.log("You Lose this Game");
//     }
//     else {
//         console.log("Nobody won this Game !")
//     }
//     return;

// }

document.querySelector("#rock-btn").addEventListener("click", () => {playRound(0, getComputerChoice())})
document.querySelector("#paper-btn").addEventListener("click", () => {playRound(1, getComputerChoice())})
document.querySelector("#scissors-btn").addEventListener("click", () => {playRound(2, getComputerChoice())})


