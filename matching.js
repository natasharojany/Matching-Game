                

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
  // value = shuffle(arr);

  console.log(cardId);
  card = document.querySelector("#card" + cardId);
  card.innerText = arr[cardId]; 
}

let moves = 0;
let counter = document.querySelector(."moves");

function startGame(){
	shuffle(arr);
	showAllCards();
  countdown();

	document.getElementById('start-btn').innerHTML = true

  moves = 0;
  counter.innerHTML
}

function moveCounter(){
  moves++;
  counter.innerHTML = moves;
}


	flip();
  timer();

}



let count = -1


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


function flipBack(cardId) {
  
}




                


