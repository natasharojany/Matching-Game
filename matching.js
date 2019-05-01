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
    card = document.querySelector("#card" + cardId);
    card.innerText = arr[cardId];
    flippedCards.push(cardId); 
  }
  else if (first === second) {
    flippedCards = []
  }
 
 function flipback(){
  flippedCards = []
 }

  card = document.querySelector("#card" + cardId);
  card.innerText = arr[cardId]; 
  moveCounter();

}


function startGame(){
	shuffle(arr);
	showAllCards();
  

	document.getElementById('start-btn').innerHTML = true

  moves = 0;
  counter.innerHTML
  shuffle(arr);
  showAllCards();

}

function resetGame() {

  newBoard();
  moves = 0;
  flippedCards.length = 0;
  document.getElementById('counter').innerHTML = moves;
  shuffle()

  moves = 0;
  document.innerHTML("counter").innerHTML = moves;
  document.getElementById("minutes").innerHTML = 0;
  document.getElementById("seconds").innerHTML = 0;

}

let moves = 0;
function moveCounter() {
  moves++;
  const moveCounter = document.getElementById('counter');
  moveCounter.innerHTML = moves;
}









function flipBack(cardId) {
  
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




