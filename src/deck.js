class Deck {
  constructor() {
    this.deck = [];
    this.players = [];
    // this.playerOneHand = []; this.playerTwoHand = [];
  }

  // create number of players
  createPlayers(num) {
    for (let i = 0; i < num; i++) {
      let hand = [];
      let player = {
        id: i + 1,
        hand: hand
      }
      this
        .players
        .push(player);
    }
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
    let count = 0;
    while (this.deck.length != 0) {
      for (let i = 0; i < this.players.length; i++) {
        let card = this
          .deck
          .shift(count);
        this
          .players[i]
          .hand
          .push(card);
      }
      count++;
    }
  }

  // show deck at current state
  showDeck() {
    return this.deck;
  }

  // show player hand
  showPlayerHand(id) {
    if (id < 1) 
      return 'Please use an number larger than 0.';
    let num = id - 1;
    return `Player ${id}'s hand is ${this.players[num].hand}.`;
  }
}

let newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffle();
newDeck.createPlayers(3)
newDeck.dealCards()

console.log(newDeck.showPlayerHand(2));