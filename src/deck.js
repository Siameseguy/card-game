module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.players = [];
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

  // create number of players
  createPlayers(num) {
    if (num === 0) 
      return 'There must be a least one player.'
    if (isNaN(num)) 
      return 'Invalid input.'
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

  // deal cards to players, alternating while removing cards from deck
  dealCards() {
    let count = 0;
    while (this.deck.length != 0) {
      for (let player of this.players) {
        player
          .hand
          .push(this.deck.shift(count));
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
    if (isNaN(id)) 
      return 'Invalid input.';
    let num = id - 1;
    return `Player ${id}'s hand is ${this.players[num].hand}.`;
  }

  // show all players
  showPlayers() {
    return this.players;
  }
}
