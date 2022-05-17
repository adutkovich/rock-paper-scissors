let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();
let playerSelection;
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

function playRound(){
    computerSelection = computerPlay().toLocaleLowerCase();
    if (
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

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        
        playRound();
        
        let pScore = document.querySelector('.playerScore');
        pScore.textContent = playerScore;
        pScore = playerScore;
        let cScore = document.querySelector('.computerScore');
        cScore.textContent = computerScore;
        cScore = computerScore
        
        let roundResults = document.querySelector('.roundResults');
        let nextRound = document.querySelector('.nextRound');

        if (playerScore <= 4 && computerScore <= 4){
            if (playerSelection == computerSelection){
                roundResults.textContent = "Well, that was a tie..."
                nextRound.textContent = ""

            }
            else if (
                (computerSelection == 'rock' && playerSelection == 'scissors') ||
                (computerSelection == 'paper' && playerSelection == 'rock') ||
                (computerSelection == 'scissors' && playerSelection == 'paper')
                )
            {
                roundResults.textContent = "Computer takes that round!";
                nextRound.textContent = ""

            }
            else if (
                (playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper') 
                )
            {
                roundResults.textContent = "Looks like you got a point.";
                nextRound.textContent = ""
            }
        } else if (playerScore = 5 && computerScore < 5) {
            playerScore = 0;
            computerScore = 0; 
            roundResults.textContent = "You beat a computer, does that make you feel good?"
            nextRound.textContent = "Next round will start with your next play."
        } else if (computerScore = 5 && playerScore < 5) {
            playerScore = 0;
            computerScore = 0;
            roundResults.textContent = "You lost to a computer, how does that make you feel? "
            nextRound.textContent = "Next round will start with your next play."
        }        
    })
})
