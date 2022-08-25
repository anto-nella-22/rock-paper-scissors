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
    console.log('You chose ' + playerSelection + ' and your opponent chose ' + computerSelection);

    //compares the two values from the round
    //adds a point to the player that wins the round
    //displays score of the current round
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        ++playerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        ++playerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        ++playerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        ++computerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        ++computerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        ++computerScore;
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    } else {
        //no points are added due to a tie
        console.log('Player 1 : ' + playerScore + ' Computer : ' + computerScore);
    }

    
}




//create function called game
//this function will play the game for 5 rounds
//it will keep the score and report the winner/loser at the end
/*
function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    //compares final score and displays the winner
    if (playerScore > computerScore) {
        console.log('Player 1 wins!');
    } else if (computerScore > playerScore) {
        console.log('Computer wins!');
    } else {
        console.log('A tie!');
    }
}
*/




