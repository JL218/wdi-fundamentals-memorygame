// // Create an array which contains the 4 cards;
// Global Variables
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

// // Function Declarations
// checking for matching pairs
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, but this is not a matching pair. Please try again.');
  }
}

// flipping the cards over
function flipCard(cardId) {
  // push and log cardId of flipped card.
  // push to cards array / log to console. 
  console.log('User flipped: ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

  if (cardsInPlay.length === 2) {
    // check for a matching pair, as declared in the function above this one;
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
