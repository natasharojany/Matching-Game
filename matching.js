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
 
var cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']
cardValues.shuffle();
 
       

function newBoard() {
	tilesFlipped = 0;
	shuffle();

}

function flip(cardId){
  value = cardValues[cardId];
  card = document.querySelector("#card" + cardId);
  card.innerText = value;
 
}

{
function shuffle(array)
let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']
  shuffle(arr);
  arr = ['K', 'L','C','A', 'H', 'L', 'M', 'M', 'N', 'E', 'F', 'N', 'A', 'B',  'C', 'D', 'D', 'E',  'F', 'G', 'O', 'P','B','H', 'I', 'J', 'K', 'P', 'I', 'J','G','O']
}

