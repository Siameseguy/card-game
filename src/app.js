module.exports = class Deck {
  constructor() {
    this.deck = [];
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

    this.shuffle();

    return this.deck;
  }

  shuffle() {
    return this
      .deck
      .sort(() => {
        return 0.5 - Math.random()
      });
  }
}

//let newDeck = new Deck(); console.log(newDeck.createDeck());