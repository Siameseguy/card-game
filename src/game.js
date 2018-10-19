const Deck = require('../src/deck');

class Game {
  constructor() {
    this.players = 4;
  }

  dealCards() {
    let newDeck = new Deck();
    newDeck.createDeck()
    newDeck.shuffle();

    let playerOnehand = [];
    let playerTwoHand = [];
    console.log(newDeck)

  }
}

let newGame = new Game();

console.log(newGame.dealCards());