var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if ((cardOne === cardTwo) || (cardThree === cardFour)) {
  alert("You found a match!");
  } else if ((cardOne !== cardThree) && (cardOne !== cardFour) ) {
  alert("Sorry, try again.");
  } else if ((cardTwo !== cardThree) && (cardTwo !== cardFour)) {
  alert("Sorry, try again");
}
*/


function createCards() {
  var gameBoard = document.getElementById("game-board");
  var cards = 4; for(var i = 0; i < cards; i++) {
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";
    gameBoard.appendChild(cardDiv);
  }
}

createCards();
