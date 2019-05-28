var tilesFlipped = 0;
var flippedCards = [];

function newBoard() {
  tilesFlipped = 0;
  }

let arr = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',]


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function showAllCards(){
  for (var i = 0; i > 21; i++) {
    card = document.querySelector("#card" + i);
    card.innerText = arr[i];
  }
}

var numMatches = 0

function matches(){
  first = flippedCards[0];
  second = flippedCards[1];
  return arr[first] === arr[second]
}


function flip(cardId){
  console.log(cardId);
  if (flippedCards.length < 2) {
    card = document.querySelector("#card" + cardId);
    //card.innerText = arr[cardId];
    const URL = letterToURL(arr[cardId]);
    card.style.backgroundImage = "url(" + URL + ")";
    card.style.backgroundSize = "80px 80px"; 
    flippedCards.push(cardId); 
    moveCounter()
  }
  else if (matches()) {
    flippedCards = []
    numMatches++;
    gameOver();
  } else {
    card = document.querySelector("#card" + flippedCards[0]);
    card.innerHTML = "&nbsp;";
    card.style.backgroundImage = null;
    card = document.querySelector("#card" + flippedCards[1]);
    card.innerHTML = "&nbsp;";
    card.style.backgroundImage = null;
    flippedCards = []
  }
}
 
 function flipback(){
  flippedCards = []
 }

function letterToURL(letter){
  switch(letter){ 
    case "A":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png";
    case "B":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png";
    case "C":
      return "https://vignette.wikia.nocookie.net/spongebob/images/8/84/Sandy_stock_art.png/revision/latest?cb=20181202012358";
    case "D":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png";
    case "E":
      return "https://vignette.wikia.nocookie.net/great-characters/images/4/47/Plankton.png/revision/latest?cb=20180808223621";
    case "F":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Pearl_Krabs.svg/220px-Pearl_Krabs.svg.png";
    case "G":
      return "https://vignette.wikia.nocookie.net/spongebob/images/a/a6/Karen_mobile_stock_art.png/revision/latest?cb=20181202012333";
    case "H":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/220px-Squidward_Tentacles.svg.png";
    case "I":
      return "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/220px-Mrs._Puff.svg.png";
    case "J":
      return "https://i.imgur.com/pnevrPA.jpg";
    default:
      return null;
  }
}

function startGame(){
  shuffle(arr);
  showAllCards();
}

function resetGame() {
  moves = 0;
  totalSeconds = 0; 
  newBoard();
  flippedCards.length = 0;
  document.querySelectorAll('.card').forEach((node) => {
    node.innerHTML = "&nbsp;";
    node.style.backgroundImage = null;
  })
  document.getElementById('counter').innerHTML = moves;
  document.getElementById("minutes").innerHTML = '00';
  document.getElementById("seconds").innerHTML = '00';
  clearInterval(timerIndex);


}

var moves = 0;
function moveCounter() {
  console.log('counting')
  console.log(moves)
  moves+= 1;
  const moveCounter = document.getElementById('counter');
  moveCounter.innerHTML = moves;
  return moves;
}

var totalSeconds = 0;
var timerIndex =  null;
function timer(){
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  timerIndex = setInterval(setTime, 1000);
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

function gameOver(){
  if (numMatches === arr.length/2){
    endGame();
  }
}

function endGame(){
  alert("You matched all the cards in " + moves + " tries and it took you " + totalSeconds + " seconds!");
    resetGame();
}