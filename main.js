let counter = 1;
let currentPlayer = {
  value: 1,
  name: 'Morgan'
}
let player1Score = 300;
let player2Score = 300;
let player3Score = 300;
let player4Score = 300;
let player1ScoreDiv;
let player2ScoreDiv;
let player3ScoreDiv;
let player4ScoreDiv;
let currentPlayerDiv;

function addInput(divName) {
  let newdiv = document.createElement('div');
  newdiv.innerHTML = '<div class="form-group row"><div class="col-4">Player ' + (counter + 1) + ':</div><div class="col-8"><input type="text"></div></div>';
  document.getElementById(divName).appendChild(newdiv);
  counter++;
}

function init() {
  player1ScoreDiv = document.getElementById('player1Score');
  player2ScoreDiv = document.getElementById('player2Score');
  player3ScoreDiv = document.getElementById('player3Score');
  player4ScoreDiv = document.getElementById('player4Score');
  currentPlayerDiv = document.getElementById('current-player');
  currentPlayer.value = 1;
  currentPlayer.name = 'Morgan';

  updateDisplay();

}
function updateDisplay() {
  currentPlayerDiv.innerHTML = currentPlayer.name;
  player1ScoreDiv.innerHTML = player1Score;
  player2ScoreDiv.innerHTML = player2Score;
  player3ScoreDiv.innerHTML = player3Score;
  player4ScoreDiv.innerHTML = player4Score;
}
function submitScore() {
  let scoreInput = document.getElementById('scoreInput').value
  if (currentPlayer.value === 1 && scoreInput <= player1Score) {
    player1Score -= scoreInput;
    currentPlayer.value = 2;
    currentPlayer.name = 'Erin';
  } else if (currentPlayer.value === 2 && scoreInput <= player2Score) {
    player2Score -= scoreInput;
    currentPlayer.value = 3;
    currentPlayer.name = 'Isaac'
  }else if (currentPlayer.value === 3 && scoreInput <= player3Score) {
    player3Score -= scoreInput;
    currentPlayer.value = 4;
    currentPlayer.name = 'Dad'
  }else if (currentPlayer.value === 4 && scoreInput <= player4Score) {
    player4Score -= scoreInput;
    currentPlayer.value = 1;
    currentPlayer.name = 'Morgan';
  }
  document.getElementById('scoreInput').value = 0;

  updateDisplay();
}

init();
