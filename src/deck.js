module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.playerOneHand = [];
    this.playerTwoHand = [];
  }

  card(value, suite) {
    return value + ' of ' + suite;
  }

  createDeck() {
    let suite = ["spades", "hearts", "diamonds", "clovers"];
    const number = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    for (let num of number) {
      for (let s of suite) {
        this
          .deck
          .push(this.card(num, s))
      }
    }

    return this.deck;
  }

  shuffle() {
    var m = this.deck.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this.deck;
  }

  dealCards() {
    let counter = 0;
    while (this.deck.length) {
      if (counter % 2 != 0) {
        this
          .playerOneHand
          .push(this.deck.shift(this.deck[counter]))
      } else {
        this
          .playerTwoHand
          .push(this.deck.shift(this.deck[counter]))
      }
      counter++
    }
  }

  showDeck() {
    return this.deck;
  }

  showPlayerOneHand(player) {
    return this.playerOneHand;
  }

  showPlayerTwoHand(player) {
    return this.playerTwoHand;
  }
}
