const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');

describe('Deck', () => {
  before(() => {
    newDeck = new Deck();
  });

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

  describe('createDeck', () => {
    it('deck size should be 52 after creation', () => {
      expect(newDeck.createDeck().length)
        .to
        .equal(52);
    })

    it('should have no duplicate cards', () => {
      let x = new Deck();
      expect(new Set(newDeck.createDeck()).size === x.createDeck().length)
        .to
        .equal(true);
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
      newDeck.createDeck();
      expect(newDeck.shuffle())
        .to
        .be
        .an('array');
    });
  })

  describe('dealCards', () => {
    it('should deal cards to both players until deck is empty', () => {
      expect(newDeck.dealCards().length)
        .to
        .equal(0);
    })
  })

})
