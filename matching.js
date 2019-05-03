class Matching {
	constructor() {
		this.locked = false;
    	
	}
	toggleLock() {
    	this.locked = !this.locked;
    	return this;
    }
}

var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;
var flippedCards = [];



function newBoard() {
  tilesFlipped = 0;
  }

let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K']


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function showAllCards(){
  for (var i = 0; i > 21; i++) {
    card = document.querySelector("#card" + i);
    card.innerText = arr[i];
  }
}

function matches(){
  first = flippedCards[0];
  second = flippedCards[1];
  return arr[first] === arr[second]
}

function flip(cardId){
  console.log(cardId);
  if (flippedCards.length < 2) {
    flippedCards.push(cardId); 
    card = document.querySelector("#card" + cardId);
    card.innerText = arr[cardId]; 
    moveCounter();
  }
  else if (matches()) {
    flippedCards = []
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
  moves = 0;
}


function resetGame() {
  newBoard();
  moves = 0;
  flippedCards.length = 0;
  document.getElementById('counter').innerHTML = moves;
  shuffle()
  moves = 0;
  document.innerHTML("counter").innerHTML = moves;

  document.innerHTML("minutes").innerHTML = 0;
  document.getElementById("seconds").innerHTML = 0;

}

let moves = 0;
function moveCounter() {
  moves++;
  const moveCounter = document.getElementById('counter');
  moveCounter.innerHTML = moves;
}



function timer(){
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  setInterval(setTime, 1000);
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




