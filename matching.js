let cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']

var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}
 
var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
tempArray.shuffle();
 
// and the result is...
alert(tempArray);       
function newBoard() {
	tilesFlipped = 0;
	cardValues.shuffle();
}

function flip(cardId){
  value = cardValues[cardId];
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
 
}