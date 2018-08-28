//Create an array to store all card objects
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png',
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',
  },
];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
function checkForMatch() {

  // Check to see if two cards match and provide feedback to user
  //if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
};

// Create a function to represent a user flipping a card
function flipCard() {

  var cardId = this.getAttribute('data-id');

//Add card to array of cards in play
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {

    // If yes, call the checkForMatch function
    checkForMatch();

    // Empty cards in play array for next try
    cardsInPlay = [];
  };
};

// Create a function to create board
function createBoard() {

  // Loop through cards array to create card elements
  for (var i = 0; i < cards.length; i+) {

    // Create an img element to be used as a card
    var cardElement = document.createElement('img');

    // Set src attribute to display back of card image
    cardElement.setAttribute('src', 'images/back.png');

    // Set card's 'data-id' attribute as index of current element
    cardElement.setAttribute('data-id', i);

    // Add an event listener so when a card is clicked, 
    // function flipCard is executed
    cardElement.addEventListener('click', flipCard);

    // Add card to board
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// Call createBoard function
createBoard();

