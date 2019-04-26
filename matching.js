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




	shuffle();

	shuffle()

}

function flip(cardId){
  value = cardValues[cardId];
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
 
}

// let count = -1

function startGame(){
	document.getElementById('start-btn');
	flip(cardId);
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


function flipBack() {
  value = 0;
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
}


function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}

