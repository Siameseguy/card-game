const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');

describe('Deck', () => {
  describe('functions', () => {
    before(() => {
      newDeck = new Deck();
    })

    it('should have a function called card', () => {
      expect(typeof newDeck.card)
        .to
        .equal('function');
    })
    it('should have a function called createDeck', () => {
      expect(typeof newDeck.createDeck)
        .to
        .equal('function');
    })
    it('should have a function called shuffle', () => {
      expect(typeof newDeck.shuffle)
        .to
        .equal('function');
    })
    it('should have a function called createPlayers', () => {
      expect(typeof newDeck.createPlayers)
        .to
        .equal('function');
    })
    it('should have a function called dealCards', () => {
      expect(typeof newDeck.dealCards)
        .to
        .equal('function');
    })
    it('should have a function called showDeck', () => {
      expect(typeof newDeck.showDeck)
        .to
        .equal('function');
    })
    it('should have a function called showPlayerHand', () => {
      expect(typeof newDeck.showPlayerHand)
        .to
        .equal('function');
    })
    it('should have a function called showPlayers', () => {
      expect(typeof newDeck.showPlayers)
        .to
        .equal('function');
    })
  })

  describe('createDeck', () => {
    before(() => {
      newDeck.createDeck();
    })

    it('deck size should be 52 after creation', () => {
      expect(newDeck.deck.length)
        .to
        .equal(52);
    })

    it('should be an array', () => {
      expect(newDeck.deck)
        .to
        .be
        .an('array');
    })

    it('should have the correct name format on card', () => {
      let value = "5";
      let suite = "hearts"
      expect(newDeck.card(value, suite))
        .to
        .equal("5 of hearts");
    })
  })

  describe('shuffle', () => {
    it('shuffle function should return an array', () => {
      expect(newDeck.shuffle())
        .to
        .be
        .an('array');
    });

    it('should shuffle created deck', () => {
      expect(newDeck.shuffle())
        .to
        .not
        .equal([
          "2 of spades",
          "2 of hearts",
          "2 of diamonds",
          "2 of clubs",
          "3 of spades",
          "3 of hearts",
          "3 of diamonds",
          "3 of clubs",
          "4 of spades",
          "4 of hearts",
          "4 of diamonds",
          "4 of clubs",
          "5 of spades",
          "5 of hearts",
          "5 of diamonds",
          "5 of clubs",
          "6 of spades",
          "6 of hearts",
          "6 of diamonds",
          "6 of clubs",
          "7 of spades",
          "7 of hearts",
          "7 of diamonds",
          "7 of clubs",
          "8 of spades",
          "8 of hearts",
          "8 of diamonds",
          "8 of clubs",
          "9 of spades",
          "9 of hearts",
          "9 of diamonds",
          "9 of clubs",
          "10 of spades",
          "10 of hearts",
          "10 of diamonds",
          "10 of clubs",
          "J of spades",
          "J of hearts",
          "J of diamonds",
          "J of clubs",
          "Q of spades",
          "Q of hearts",
          "Q of diamonds",
          "Q of clubs",
          "K of spades",
          "K of hearts",
          "K of diamonds",
          "K of clubs",
          "A of spades",
          "A of hearts",
          "A of diamonds",
          "A of clubs"
        ]);
    })
  })

  describe('createPlayers', () => {
    before(() => {
      newDeck.createPlayers(3)
    })
    it('should have 3 players in players array', () => {
      expect(newDeck.showPlayers().length)
        .to
        .equal(3);
    })
    it('should throw error if number of players is less than 1', () => {
      expect(newDeck.createPlayers(0))
        .to
        .equal('There must be a least one player.')
    })
    it('should throw error if number is not a number', () => {
      expect(newDeck.createPlayers('B'))
        .to
        .equal('Invalid input.')
    })
  })

  describe('dealCards', () => {
    before(() => {
      newDeck.dealCards();
    })
    it('should deal all available cards to players', () => {
      expect(newDeck.showDeck().length)
        .to
        .equal(0);
    })
    it('should deal cards to all players', () => {
      for (let i = 0; i <= 3; i++) {
        expect(newDeck.showPlayerHand(i))
          .to
          .not
          .equal([]);
      }
    })
  })

  describe('showDeck', () => {
    it('should be an array', () => {
      expect(newDeck.showDeck())
        .to
        .be
        .an('array')
    })
    it('should return the deck state', () => {
      expect(newDeck.showDeck())
        .to
        .not
        .equal('')
    })
  })

  describe('showPlayerHand', () => {
    it('should return a string', () => {
      expect(newDeck.showPlayerHand(1))
        .to
        .be
        .an('string')
    })
    it('should not be an invalid id', () => {
      expect(newDeck.showPlayerHand(0))
        .to
        .equal('Please use an number larger than 0.')
    })
    it('should throw error if id is not a number', () => {
      expect(newDeck.showPlayerHand('B'))
        .to
        .equal('Invalid input.')
    })
  })

  describe('showPlayers', () => {
    it('should return players array', () => {
      expect(newDeck.showPlayers())
        .to
        .be
        .an('array')
    })
    it('should not be empty if there are players created', () => {
      expect(newDeck.showPlayers().length)
        .to
        .not
        .equal(0)
    })
  })

})
