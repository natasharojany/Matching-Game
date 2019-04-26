
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

function startGame(){
  shuffle(arr);
  showAllCards();
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

                


