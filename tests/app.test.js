const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');

describe('Deck', () => {
  describe('functions', () => {
    before(() => {
      newDeck = new Deck();
    })

    it('should have a function called createDeck', () => {
      expect(typeof newDeck.createDeck)
        .to
        .equal('function');
    })
    it('should have a function called card', () => {
      expect(typeof newDeck.card)
        .to
        .equal('function');
    })
    it('should have a function called shuffle', () => {
      expect(typeof newDeck.shuffle)
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
    it('should have a function called showPlayerOneHand', () => {
      expect(typeof newDeck.showPlayerOneHand)
        .to
        .equal('function');
    })
    it('should have a function called showPlayerTwoHand', () => {
      expect(typeof newDeck.showPlayerTwoHand)
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

  describe('dealCards', () => {
    before(() => {
      newDeck.dealCards();
    })
    it('should deal cards till deck is empty', () => {
      expect(newDeck.showDeck().length)
        .to
        .equal(0);
    });
  })

  describe('showDeck', () => {
    it('should return an array', () => {
      expect(newDeck.showDeck())
        .to
        .be
        .an('array');
    })
    it('should return a deck full of cards', () => {
      expect(newDeck.showDeck())
        .to
        .not
        .equal([]);
    })
  })

  describe('showPlayerOneHand', () => {
    it('should return an array', () => {
      expect(newDeck.showPlayerOneHand())
        .to
        .be
        .an('array');
    })

    it('not be empty after cards are dealt', () => {
      expect(newDeck.showPlayerOneHand())
        .to
        .not
        .equal([])
    })

    it('should have a length of 26', () => {
      expect(newDeck.showPlayerOneHand().length)
        .to
        .equal(26);
    })
  })

  describe('showPlayerTwoHand', () => {
    it('should return an array', () => {
      expect(newDeck.showPlayerTwoHand())
        .to
        .be
        .an('array');
    })

    it('not be empty after cards are dealt', () => {
      expect(newDeck.showPlayerTwoHand())
        .to
        .not
        .equal([])
    })

    it('should have a length of 26', () => {
      expect(newDeck.showPlayerOneHand().length)
        .to
        .equal(26);
    })
  })

})
