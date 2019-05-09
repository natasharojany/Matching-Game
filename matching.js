
var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;
var flippedCards = [];




function newBoard() {
  tilesFlipped = 0;
  }

let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',]


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function showAllCards(){
  for (var i = 0; i > 21; i++) {
    card = document.querySelector("#card" + i);
    card.innerText = arr[i];
  }
}

var numMatches = 0

function matches(){
  first = flippedCards[0];
  second = flippedCards[1];
  return arr[first] === arr[second]
}

function flip(cardId){
  console.log(cardId);
  if (flippedCards.length < 2) {
    card = document.querySelector("#card" + cardId);
    card.innerText = arr[cardId];
    flippedCards.push(cardId); 
    moveCounter()
  }
  else if (matches()) {
    flippedCards = []
    numMatches++;
  } else {
    card = document.querySelector("#card" + flippedCards[0]);
    card.innerText = "0";
    card = document.querySelector("#card" + flippedCards[1]);
    card.innerText = "0";
    flippedCards = []
  }
}
 
 function flipback(){
  flippedCards = []
 }
  



function flipback(){
  flippedCards = []
 }




function startGame(){
  shuffle(arr);
  showAllCards();
}


function resetGame() {
  moves = 0;
  newBoard();
  flippedCards.length = 0;
  document.querySelectorAll('.card').forEach((node) => {
    node.innerHTML = 0;
  })
  document.getElementById('counter').innerHTML = moves;
  document.getElementById("minutes").innerHTML = '00';
  document.getElementById("seconds").innerHTML = '00';
  clearInterval(timerIndex);

}

var moves = 0;
function moveCounter() {
  console.log('counting')
  console.log(moves)
  moves+= 1;
  const moveCounter = document.getElementById('counter');
  moveCounter.innerHTML = moves;
  return moves;
}

var timerIndex =  null;

function timer(){
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  timerIndex = setInterval(setTime, 1000);


  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}

 // function gameOver(){
 //  if (numMatches === arr.length/2){
 //    text("You matched all the cards in" + moves "tries");
 //  }
 // }