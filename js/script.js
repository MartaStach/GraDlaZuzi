var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest, buttonReset, buttonSaper, set;


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonReset=document.getElementById('button-reset');
buttonSaper=buttonReset=document.getElementById('button-saper');



/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    printMessage('Ruch komputera to ' + computerMove);
    clearResults();
    displayResult(playerMove, computerMove);
  }

/**
 * Describe this function...
 */
  function buttonResetClicked(_buttonReset) {
    console.log(argButtonName + 'został kliknięty')
    console.log( 'wyniki zostały zresetowane');
    clearMessages();
    clearResults();
    playerResult = 0;
    computerResult = 0;
  }

function buttonSaperClicked () {}

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;


/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerResult=playerResult + 1
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz');
    computerResult=computerResult + 1
  }
  printResults(playerResult + '-' + computerResult)
}


function mixBombs {
  firstBombNumber = Math.floor(Math.random() * 10 + 1);
  secondBombNumber = Math.floor(Math.random() * 10 + 1);.exclude(firstBombNumber);
  thirdBombNumber = Math.floor(Math.random() * 10 + 1);.exclude(firstBombNumber, secondBombNumber);

}

function putBombs {}
var playerResult, computerResult

playerResult=0;
computerResult=0;


//buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
buttonReset.addEventListener('click', function () { buttonResetClicked('reset'); });
buttonReset.addEventListener('click', function () { buttonSaperClicked('saper'); });