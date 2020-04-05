// // Create an array which contains the 4 cards;
// Global Variables
const cards = [
  {
    rank: 'Queen',
    suit: 'Hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'King',
    suit: 'Hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'King',
    suit: 'Diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
const cardsInPlay = [];

// // Function Declarations

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// flipping the cards over
function flipCard() {
  // push and log cardId of flipped card.
  // push to cards array / log to console.
  cardId = this.getAttribute('data-id');
  console.log('User flipped: ' + cards[cardId].rank); // updated from cards[cardID];
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    // check for a matching pair, as declared in the function above this one;
    checkForMatch();
  }
}

// checking for matching pairs
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, but this is not a matching pair. Please try again.');
  }
}

createBoard();