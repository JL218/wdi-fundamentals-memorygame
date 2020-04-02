// Create an array which contains the 4 cards;
const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];
const cardOne = cards[0];
const cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped: ' + cardOne);
console.log('User flipped: ' + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, but this is not a matching pair. Please try again.');
  }
}