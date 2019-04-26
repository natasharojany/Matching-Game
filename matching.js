<<<<<<< HEAD
class Matching {
	constructor() {
		this.locked = false;
    	
	}
	toggleLock() {
    	this.locked = !this.locked;
    	return this;
    }
}
=======
const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']

var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;

function shuffle() {
	cardValues = Collections.shuffle(cardValues)
}       

function newBoard() {
	tilesFlipped = 0;

	cardValues.shuffle();

>>>>>>> 217480e3f8d95241b1abcaba2a1b6b315b3d9314

let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}



function flip(cardId){
  value = shuffle(arr);
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
  alert(arr)
 
}

function startGame(){
	document.getElementById('start-btn').innerHTML = true
	flip();
}



<<<<<<< HEAD

=======
>>>>>>> 217480e3f8d95241b1abcaba2a1b6b315b3d9314


