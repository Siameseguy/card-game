const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/deck');

let a = new Deck();
console.log(a.shuffle())

describe('Deck', () => {
  before(() => {
    newDeck = new Deck();
  });

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
  it('should have a function called dealCards', () => {
    expect(typeof newDeck.dealCards)
      .to
      .equal('function');
  })
  it('should deal cards to both players until deck is empty', () => {
    expect(newDeck.dealCards().length)
      .to
      .equal(0);
  })
  it('deck size should be 52 after creation', () => {
    expect(newDeck.createDeck().length)
      .to
      .equal(52);
  })
  it('shuffle function should return an array', () => {
    newDeck.createDeck();
    expect(newDeck.shuffle())
      .to
      .be
      .an('array');
  });

})
