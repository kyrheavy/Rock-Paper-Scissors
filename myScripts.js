// global values
const choices = ['rock', 'paper', 'scissors'];
let winners = [];


function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playAgain(){
    winners = [];
   document.querySelector('.playerScore').textContent = "Score: 0";
   document.querySelector('.compScore').textContent = "Score: 0";
   document.querySelector('.ties').textContent = "";
   document.querySelector('.winner').textContent = "";
   document.querySelector('.playerChoice').textContent = "";
   document.querySelector('.compChoice').textContent = "";
   document.querySelector('.restartGame').style.display = 'none';
   document.querySelector('.opener').style.display = 'block';
   document.querySelector('.description').style.display = 'block';

}

function startGame(){
    document.querySelector('.ties').textContent = "";
   
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
    img.addEventListener('click', () => {
        if(img.id){
            oneRound(img.id);
        }
        document.querySelector('.ties').style.display = 'block';
        
    }))

}

function checkWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    return Math.max(playerWins, computerWins);
}


function oneRound(playerChoice){
    let wins = checkWins();
    if(wins >= 5){
        return
    }
    document.querySelector('.opener').style.display = 'none';
    document.querySelector('.description').style.display = 'none';

    let compChoice = getComputerChoice()

    const winner = checkWinner(playerChoice, compChoice);

    winners.push(winner); 
       
    tallyWins();
    displayRound(playerChoice, compChoice, winner);
    wins = checkWins();
    if(wins == 5){

        displayEnd()
    }
}

function displayEnd(){
    let playerWins = winners.filter((item) => item == 'Player').length;

    if( playerWins == 5){
        document.querySelector('.winner').textContent = `You beat the Machine!`;
        document.querySelector('.ties').textContent = "";
    } else {
        document.querySelector('.winner').textContent = `You Lost to the Machine!`;
        document.querySelector('.ties').textContent = "";
    }
    document.querySelector('.restartGame').style.display = "flex";
}

function displayRound(playerChoice, compChoice, winner){
    document.querySelector('.playerChoice').textContent = `you chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.compChoice').textContent = `you chose: ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)}`;

    document.querySelector('.winner').textContent = `${winner} has won the round!`;
}

function tallyWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;

    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.compScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function checkWinner(player, computer){

        if(player === computer){
            return 'Tie';
        } else if((player === 'rock' && computer === 'scissors')||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')){
            return `Player`;
        } else {
            return `Computer`;
        }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
}

startGame();
