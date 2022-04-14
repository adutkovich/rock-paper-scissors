// console.log("hello.")
let playerScore = 0;
let computerScore = 0;
function winner(){
    if (playerScore > computerScore){
        return "player wins"}
    else if (computerScore > playerScore){
        return "computer wins"}
    else if ( computerScore = playerScore){
        return "tie game"}
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber){
            case 0:
                return 'rock'
            case 1:
                return 'paper'
            case 2:
                return 'scissors'
        }
}
// console.log(computerPlay());

function playRound(){
    let playerSelectionInput= prompt("Please enter rock, paper, or scissors.");
    let playerSelection = playerSelectionInput.toLowerCase();
    let computerSelection = computerPlay();
    
    // alert(playerSelection)
    // return computerPlay();

    if (playerSelection == computerSelection){
        return "that game was a tie";
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
        )
    {
        return computerScore++;
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') 
        )
    {
        return playerScore++;
    }
}

function playGame(){
    for (let i =0; i < 5; i++){
        playRound()
        let round = i + 1;
        console.log("Round:" + round);
        console.log("players score: " + playerScore);
        console.log("computer score: " + computerScore);
    }
    return winner()
}