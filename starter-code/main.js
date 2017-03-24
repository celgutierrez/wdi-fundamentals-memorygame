/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/
/*
if ((cardOne === cardTwo) || (cardThree === cardFour)) {
  alert("You found a match!");
  } else if ((cardOne !== cardThree) && (cardOne !== cardFour) ) {
  alert("Sorry, try again.");
  } else if ((cardTwo !== cardThree) && (cardTwo !== cardFour)) {
  alert("Sorry, try again");
}
*/

/*function createCards() {
  var gameBoard = document.getElementById("game-board");
  var cardNumber = 4; for(var i = 0; i < cardNumber; i++) {
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    gameBoard.appendChild(cardDiv);
  }
}
createCards();*/

var cards = ['queen', 'queen','king','king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

function createBoard () {
  for (var i =0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    //cardElement.setAttribute('src', 'cards/king.png');
    //cardElement.setAttribute('src', 'cards/queen.png');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
    gameBoard.appendChild(cardElement);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='cards/king.png'>";
  } else {
    this.innerHTML = "img src='cards/queen.png'>";
  }

  this.getAttribute('data-card');
  if (this.getAttribute('data-card') === 'king') {
  this.setAttribute('src','cards/king.png');
} else {this.setAttribute('src','cards/queen.png')
  };

  if (cardsInPlay.length ===2) {
    isMatch(cardsInPlay);
    cardsInPlay =[];
  }
    resetGame();
}

function isMatch(cards){
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again!");
  }

}

var resetGame = function() {
    this.innerHTML = '';
}


createBoard();
