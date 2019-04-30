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


function flip(cardId){
  console.log(cardId);
  card = document.querySelector("#card" + cardId);
  card.innerText = arr[cardId]; 
}

let moves = 0;
let counter = document.querySelector("moves");

function startGame(){
  shuffle(arr);
  showAllCards();
}
function moveCounter(){
  moves++;
  counter.innerHTML = moves;
}




let count = -1




function flipBack(cardId) {
  
}




                


