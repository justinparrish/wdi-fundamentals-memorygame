var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
checkForMatch();
  if(cardsInPlay.length === cardsInPlay) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
}
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped " + cards[cardId].suit);
console.log("User flipped " + cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
};
flipCard(0);
flipCard(2);