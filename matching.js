const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']

var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;

function shuffle() {
	cardValues = Collections.shuffle(cardValues)
}       
newBoard()
function newBoard() {
	tilesFlipped = 0;
	shuffle()
}

function flip(cardId){
  value = cardValues[cardId];
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
 
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
