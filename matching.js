
class Matching {
	constructor() {
		this.locked = false;
    	
	}
	toggleLock() {
    	this.locked = !this.locked;
    	return this;
    }
}

const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']

var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;
   

function newBoard() {
	tilesFlipped = 0;
	}

let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']


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
  value = shuffle(arr);
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
  
 
}

function startGame(){
	showAllCards();
	document.getElementById('start-btn').innerHTML = true
}




{
function shuffle(array)
let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']
  shuffle(arr);
  arr = ['K', 'L','C','A', 'H', 'L', 'M', 'M', 'N', 'E', 'F', 'N', 'A', 'B',  'C', 'D', 'D', 'E',  'F', 'G', 'O', 'P','B','H', 'I', 'J', 'K', 'P', 'I', 'J','G','O']
}



function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}



let count = -1


function flipBack(cardId) {
  
}


function moveCounter(){    
 
}



