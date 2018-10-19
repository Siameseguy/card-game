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
    for (let i = 0; i < this.deck.length; i++) {
      if (i % 2 != 0) {
        this
          .playerOneHand
          .push(this.deck[i])
      } else {
        this
          .playerTwoHand
          .push(this.deck[i])
      }
    }
    return this.deck = [];

  }
}