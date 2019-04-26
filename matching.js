class Matching {
	constructor() {
		this.locked = false;
    	
	}
	toggleLock() {
    	this.locked = !this.locked;
    	return this;
    }
}

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






