module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.playerOneHand = [];
    this.playerTwoHand = [];
  }

  // format cards to have value and suite
  card(value, suite) {
    return value + ' of ' + suite;
  }

  // create deck with suites and numbers
  createDeck() {
    let suite = ["spades", "hearts", "diamonds", "clubs"];
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

  // shuffle deck using fisher-yates algorithm
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

  // deal cards to two players, alternating while removing cards from deck
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

  // show deck at current state
  showDeck() {
    return this.deck;
  }

  // show player one hand
  showPlayerOneHand(player) {
    return this.playerOneHand;
  }

  // show player two hand
  showPlayerTwoHand(player) {
    return this.playerTwoHand;
  }
}
