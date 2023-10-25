let score= JSON.parse(localStorage.getItem('score'))||{
  winCount:0,
  loseCount:0,
  tieCount:0
};

updateScoreElement();

let move = '';
let result = '';
let playerMoveOut = '';
let playerMove = '';

let isAutoplaying = false;
let intervalId;
 
//const autoPlay = () =>{
  
//};

function autoPlay(){
  if (!isAutoplaying){
    intervalId = setInterval( ()=>{
      pickAutoMove();
        playGame(playerMove);
      },1000)
      isAutoplaying = true;

  }else{
    clearInterval(intervalId);
    isAutoplaying = false;
  }
 
}

document.querySelector('js-rock-button').addEventListener('click', playGame('rock'));

function  playGame(playerMoveOut){
pickComputermove();
if (playerMoveOut ==='scissors'){
playerMoveOut = 'scissors';
  if (move === 'rock'){
  result = 'You Lost.';
  score.loseCount++;
  }else if (move === 'paper'){
   result = 'You Win.';
   score.winCount++;
  } else if(move === 'scissors') {
  result = 'Tie.';
  score.tieCount++;
  }
} else if (playerMoveOut === 'rock'){

  if (move === 'rock'){
  result = 'Tie.';
  score.tieCount++;
   }else if (move === 'paper'){
  result = 'You Lost.';
  score.loseCount++;
  } else if(move === 'scissors') {
  result = 'You Win.';
  score.winCount++;
}
} else if (playerMoveOut === 'paper'){

  if (move === 'rock'){
   result = 'You Win.';
   score.winCount++;
   }else if (move === 'paper'){
  result = 'Tie.';
    score.tieCount++;
  } else if(move === 'scissors') {
    result = 'You Lost.';
    score.loseCount++;
  }
}

localStorage.setItem('score', JSON.stringify (score));

updateScoreElement();

updateResult();

updateMove();

}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins:${score.winCount}.   Loss:${score.loseCount}.   Tie:${score.tieCount}`;

}

function updateResult(){
document.querySelector('.js-result')
.innerHTML = `${result}`;
}

function updateMove() {
  const movesElement = document.querySelector('.js-moves');
  const playerMoveImage = `${playerMoveOut}-emoji.png`;
  const computerMoveImage = `${move}-emoji.png`;

  movesElement.innerHTML = `
    You
    <img src="${playerMoveImage}" class="move-icon">
    <img src="${computerMoveImage}" class="move-icon">
    Computer
  `;
}


function pickComputermove(){

const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1/3){
move ='rock';
} else if (randomNumber >=1/3 && randomNumber <2/3){
move = 'paper';
}else if (randomNumber>= 2/3 && randomNumber <=1){
move = 'scissors';
}
}
function pickAutoMove(){

  const randomNumber = Math.random();
  
  if (randomNumber >= 0 && randomNumber < 1/3){
  playerMove ='rock';
  } else if (randomNumber >=1/3 && randomNumber <2/3){
  playerMove = 'paper';
  }else if (randomNumber>= 2/3 && randomNumber <=1){
  playerMove = 'scissors';
  }
  }