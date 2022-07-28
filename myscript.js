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


//create function that plays 1 round 
//create two parameters inside function: playerSelection and computerSelection
//create variables for the parameters
//return a string that declares the winner of the round
//make playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Your turn').toLowerCase();
    computerSelection = getComputerChoice();
    alert('You chose ' + playerSelection + ' and your opponent chose ' + computerSelection);
    alert('You lose! Paper beats Rock');
}
