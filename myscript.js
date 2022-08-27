//you will play againts the computer

//create variable with choices
//use array type to include choices
const choice = ['Rock', 'Paper', 'Scissors'];

//create a function called getComputerChoice
//this function will return a random choice (rock, paper, or scissors)
function getComputerChoice() {
    //use random function to get a choice from array variable
    //floor makes sure it is a whole number in range
    //random returns between 0 and 1
    //choice.length takes all the elements in the choice array into consideration
    return choice[Math.floor(Math.random() * choice.length)];
}

//create two variables to add scores of game
let playerScore = 0;
let computerScore = 0;

//add event listener that calls playRound function
//create new variable to store choice made by player
let playerItem;
//create new variable that selects all buttons
const btns = document.querySelectorAll('button');
//apply event listener to all buttons
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        //create new variable to store event value
        const itemTarget = e.target.value;
        //store value obtained by prevoius variable 
        playerItem = itemTarget;
        //calls the function
        playRound();
        game();
    });
});

//create function that plays 1 round 
//create two parameters inside function: playerSelection and computerSelection
//create variables for the parameters
//return a string that declares the winner of the round
//make playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {
    //get value from result of eventlistener variable
    playerSelection = playerItem;

    computerSelection = getComputerChoice();

    //displays the choices of players
    let text = "You chose "+ playerSelection + " and your opponent chose " + computerSelection;
    document.querySelector('.results').textContent = text;
    //results.textContent = "You chose {playerSelection} and your opponent chose {computerSelection}";


    //compares the two values from the round
    //adds a point to the player that wins the round
    //displays score of the current round
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        ++playerScore;
        let firstOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = firstOption;

    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        ++playerScore;
        let secondOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = secondOption;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        ++playerScore;
        let thirdOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = thirdOption;

    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        ++computerScore;
        let fourthOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = fourthOption;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        ++computerScore;
        let fifthOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = fifthOption;

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        ++computerScore;
        let sixthOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = sixthOption;

    } else {
        //no points are added due to a tie
        let lastOption = 'Player 1 : ' + playerScore + ' Computer : ' + computerScore;
        document.querySelector('.score').textContent = lastOption;

    }
}

//shows game over and restarts game
function restartGame() {
    confirm("GAME OVER");
    window.location.reload();
}

//stops when one player reaches 5 points
//compares final score and displays the winner
function game() {
      
    if (playerScore == 5) {
        let playerWins = 'Player 1 wins!';
        document.querySelector('.winner').textContent = playerWins;
        setTimeout(restartGame, 1250);
    } else if (computerScore == 5) {
        let compWins = 'Computer wins!';
        document.querySelector('.winner').textContent = compWins;
        setTimeout(restartGame, 1250);
    } else if (computerScore == 5 && playerScore == 5){
        let noWinner = 'A tie!';
        document.querySelector('.winner').textContent = noWinner;
        setTimeout(restartGame, 1250);
    } 
    else if (playerScore > 5 || computerScore > 5) {
        setTimeout(restartGame, 1250);
    }

}




