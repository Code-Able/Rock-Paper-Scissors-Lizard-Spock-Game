// Begin Global Variables

let playerScore = 0;
let computerScore = 0;

let playerWeapon;
let computerWeapon;

const startGame = document.querySelector('#start-button-id');
const playTurn = document.querySelector('#play-button-id');
const nextRound = document.querySelector('#next-round-button-id')
const restartGame = document.querySelector('#play-again-button-id')

const chooseWeapon = document.querySelector('#choose-your-weapon-id');
const scoreBoard = document.querySelector('#scores-id');
const bothChoices = document.querySelector('#choices-id');
const playerWeaponsChoiceMenu = document.querySelector('#weapons-id');
const playerChoice = document.querySelector('#user-choice-id');
const computerWeaponChoice = document.querySelector('#computer-choice-id');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const lizard = document.querySelector('.lizard');
const spock = document.querySelector('.spock');

//Begin Functions

function removeSelectBorder(){
    rock.classList.remove('select-border');
    paper.classList.remove('select-border');
    scissors.classList.remove('select-border');
    lizard.classList.remove('select-border');
    spock.classList.remove('select-border');
}

function removeResultBorder(){
    playerChoice.classList.remove('win-border');
    playerChoice.classList.remove('lose-border');
    computerWeaponChoice.classList.remove('win-border');
    computerWeaponChoice.classList.remove('lose-border');
}

function showPlayButton(){
    playTurn.classList.remove('hide');
    playTurn.classList.add('play-button');
}

function hidePlayButton(){
    playTurn.classList.remove('play-button');
    playTurn.classList.add('hide');
}

function playerWinsRound(){
    playerChoice.classList.add('win-border');
    computerWeaponChoice.classList.add('lose-border');
    playerScore++;
    playerScoreDiv.innerText = `Player Score: ${playerScore}`;
}

function computerWinsRound(){
    playerChoice.classList.add('lose-border');
    computerWeaponChoice.classList.add('win-border');
    computerScore++;
    computerScoreDiv.innerText = `Computer Score: ${computerScore}`;
}


// Begin Game Logic Function that decides who wins the round

function decideRoundWinner() {
  if (playerWeapon === 'rock' && computerWeapon ==='lizard'){
    chooseWeapon.innerHTML = `Rock Crushes Lizard`;
    removeResultBorder();
    playerWinsRound();
  }  else if (computerWeapon === 'rock' && playerWeapon === 'lizard'){
    chooseWeapon.innerHTML = `Rock Crushes Lizard`;
    removeResultBorder();
    computerWinsRound();
  }  else if(playerWeapon === 'rock' && computerWeapon ==='scissors'){
    chooseWeapon.innerHTML = `Rock Crushes Scissors`;
    removeResultBorder();
    playerWinsRound();
  }  else if (computerWeapon === 'rock' && playerWeapon === 'scissors'){
    chooseWeapon.innerHTML = `Rock Crushes Scissors`;
    removeResultBorder();
    computerWinsRound();
  }  else if (playerWeapon === 'scissors' && computerWeapon === 'paper'){
    chooseWeapon.innerHTML = `Scissors Cuts Paper`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'paper' && computerWeapon === 'scissors'){
    chooseWeapon.innerHTML = `Scissors Cuts Paper`;
    removeResultBorder();
    computerWinsRound();
  } else if (playerWeapon === 'paper' && computerWeapon === 'rock'){
    chooseWeapon.innerHTML = `Paper Covers Rock`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'rock' && computerWeapon === 'paper'){
    chooseWeapon.innerHTML = `Paper Covers Rock`;
    removeResultBorder();
    computerWinsRound();
  } else if (playerWeapon === 'lizard' && computerWeapon === 'spock'){
    chooseWeapon.innerHTML = `Lizard Poisons Spock`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'spock' && computerWeapon === 'lizard'){
    chooseWeapon.innerHTML = `Lizard Poisons Spock`;
    removeResultBorder();
    computerWinsRound();
  } else if (playerWeapon === 'spock' && computerWeapon === 'scissors'){
    chooseWeapon.innerHTML = `Spock Smashes Scissors`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'scissors' && computerWeapon === 'spock'){
    chooseWeapon.innerHTML = `Spock Smashes Scissors`;
    removeResultBorder();
    computerWinsRound();
  }  else if (playerWeapon === 'scissors' && computerWeapon === 'lizard'){
    chooseWeapon.innerHTML = `Scissors Decapitates Lizard`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'lizard' && computerWeapon === 'scissors'){
    chooseWeapon.innerHTML = `Scissors Decapitates Lizard`;
    removeResultBorder();
    computerWinsRound();
  }  else if (playerWeapon === 'lizard' && computerWeapon === 'paper'){
    chooseWeapon.innerHTML = `Lizard Eats Paper`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'paper' && computerWeapon === 'lizard'){
    chooseWeapon.innerHTML = `Lizard Eats Paper`;
    removeResultBorder();
    computerWinsRound();
  }  else if (playerWeapon === 'paper' && computerWeapon === 'spock'){
    chooseWeapon.innerHTML = `Paper Disproves Spock`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'spock' && computerWeapon === 'paper'){
    chooseWeapon.innerHTML = `Paper Disproves Spock`;
    removeResultBorder();
    computerWinsRound();
  }  else if (playerWeapon === 'spock' && computerWeapon === 'rock'){
    chooseWeapon.innerHTML = `Spock Vaporizes Rock`;
    removeResultBorder();
    playerWinsRound();
  } else if (playerWeapon === 'rock' && computerWeapon === 'spock'){
    chooseWeapon.innerHTML = `Spock Vaporizes Rock`;
    removeResultBorder();
    computerWinsRound();
  } else if (playerWeapon === 'rock' && computerWeapon === 'rock'){
    chooseWeapon.innerHTML = `It's a Tie`;
    removeResultBorder();
  } else if (playerWeapon === 'paper' && computerWeapon === 'paper'){
    chooseWeapon.innerHTML = `It's a Tie`;
    removeResultBorder();
  } else if (playerWeapon === 'scissors' && computerWeapon === 'scissors'){
    chooseWeapon.innerHTML = `It's a Tie`;
    removeResultBorder();
  } else if (playerWeapon === 'lizard' && computerWeapon === 'lizard'){
    chooseWeapon.innerHTML = `It's a Tie`;
    removeResultBorder();
  } else if (playerWeapon === 'spock' && computerWeapon === 'spock'){
    chooseWeapon.innerHTML = `It's a Tie`;
    removeResultBorder();
  }
}
 

// Begin Start Game Code

startGame.addEventListener('click', () => {
  chooseWeapon.classList.remove('hide');
  chooseWeapon.classList.add('choose-your-weapon');

  startGame.classList.remove('start-button');
  startGame.classList.add('hide');


  scoreBoard.classList.remove('hide');
  scoreBoard.classList.add('scores');


  // Begin Player Selection

 rock.addEventListener('click',() => {
    removeSelectBorder();
    playerWeapon = 'rock';
    rock.classList.add('select-border');
    showPlayButton();
 });

 paper.addEventListener('click',() => {
    removeSelectBorder();
    playerWeapon = 'paper';
    paper.classList.add('select-border');
    showPlayButton();
 });

 scissors.addEventListener('click',() => {
    removeSelectBorder();
    playerWeapon = 'scissors';
    scissors.classList.add('select-border');
    showPlayButton();
 });

 lizard.addEventListener('click',() => {
    removeSelectBorder();
    playerWeapon = 'lizard';
    lizard.classList.add('select-border');
    showPlayButton();
 });

spock.addEventListener('click',() => {
    removeSelectBorder();
    playerWeapon = 'spock';
    spock.classList.add('select-border');
    showPlayButton();
 });

});


// Begin Computer Selection

function computerChoice(){
    let RandomNumber = Math.floor(Math.random() * 5) + 1;

    if (RandomNumber === 1){
        computerWeapon = 'rock';
    } else if(RandomNumber === 2){
        computerWeapon = 'paper';
    } else if(RandomNumber === 3){
        computerWeapon = 'scissors';
    } else if(RandomNumber === 4){
        computerWeapon = 'lizard';
    } else {
        computerWeapon = 'spock';
    }
}


// Begin Turn Play

playTurn.addEventListener('click', () => {
    removeSelectBorder();
    bothChoices.classList.add('choices');
    bothChoices.classList.remove('hide');
   
    playerWeaponsChoiceMenu.classList.remove('choose-your-weapon');
    playerWeaponsChoiceMenu.classList.add('hide');


    if (playerWeapon === 'rock'){
        playerChoice.innerHTML = `🪨`;
    } else if (playerWeapon === 'paper'){
        playerChoice.innerHTML = `📄`;
    } else if (playerWeapon === 'scissors'){
        playerChoice.innerHTML = `✂️`;
    } else if (playerWeapon === 'lizard'){
        playerChoice.innerHTML = `🦎`;
    } else {
        playerChoice.innerHTML = `🖖`;
    }

    computerChoice();

    if (computerWeapon === 'rock'){
        computerWeaponChoice.innerHTML = `🪨`;
    } else if (computerWeapon === 'paper'){
        computerWeaponChoice.innerHTML = `📄`;
    } else if (computerWeapon === 'scissors'){
        computerWeaponChoice.innerHTML = `✂️`;
    } else if (computerWeapon === 'lizard'){
        computerWeaponChoice.innerHTML = `🦎`;
    } else {
        computerWeaponChoice.innerHTML = `🖖`;
    }

    decideRoundWinner();


 // Begin Score to Win Game   

    if(playerScore === 5 || computerScore === 5){
        playTurn.classList.remove('play-button');
        playTurn.classList.add('hide');
            
        setTimeout( () => {
            if (playerScore > computerScore){
                chooseWeapon.innerHTML = `You Win!`;
                bothChoices.classList.remove('choices');
                bothChoices.classList.add('hide');
                restartGame.classList.remove('hide');
                restartGame.classList.add('play-again');
            } else {
                chooseWeapon.innerHTML = `The Computer Wins!`;
                bothChoices.classList.remove('choices');
                bothChoices.classList.add('hide');
                restartGame.classList.remove('hide');
                restartGame.classList.add('play-again');
            }
        }, 2000);

        } else {
            nextRound.classList.remove('hide');
            nextRound.classList.add('next-round-button');

            playTurn.classList.add('hide');
            playTurn.classList.remove('play-button');
        }
    });


nextRound.addEventListener('click', () => {
    hidePlayButton();
    playerWeaponsChoiceMenu.classList.remove('hide');
    playerWeaponsChoiceMenu.classList.add('weapons');
    
    nextRound.classList.remove('next-round-button');
    nextRound.classList.add('hide'); 

    bothChoices.classList.remove('choices');
    bothChoices.classList.add('hide');

    chooseWeapon.innerHTML = `Choose Your Weapon`;
});


restartGame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.innerText = `Player Score: ${playerScore}`;
    computerScoreDiv.innerText = `Player Score: ${computerScore}`;

    playerWeaponsChoiceMenu.classList.remove('hide');
    playerWeaponsChoiceMenu.classList.add('weapons');
    
    restartGame.classList.remove('play-again');
    restartGame.classList.add('hide');

    showPlayButton();

    chooseWeapon.innerHTML = `Choose Your Weapon`;
});


// Begin Modal For Instructions

var modal = document.getElementById("myModal");
var btn = document.getElementById("rules-button-id");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}