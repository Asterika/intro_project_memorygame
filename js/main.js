// Create an array to store all cards
var cards = ['queen', 'queen', 'king', 'king'];

// Create an array to store the cards in play
var cardsInPlay = [];

//Create a function to check for card match
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.");	
		}
};

//Create a function to represnt a user flipping a card
var flipCard = function (cardId) {
	//Call the flipcard function
	flipCard(0);
	flipCard(2);
	//Display the card the user just flipped	
	console.log("User flipped " + cards[cardId]);

	//Add card to array of cards in play
	cardsInPlay.push(cards[cardId]);


//Check to see if two cards have been played
if (cardsInPlay.length === 2) {
	//If so, call the checkForMatch function
	checkForMatch;
}
};

//Check to see if two cards match and provide feedback to the user
 if (cardsInPlay[0] === cardsInPlay[1]) { 
	alert("You found a match!");
 } else {
	alert("Sorry, try again.");
 };
