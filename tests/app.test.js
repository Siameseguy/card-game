const chai = require('chai');
const Deck = require('../src/app');
const expect = chai.expect;

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
  it('deck size should be 52 after creation', () => {
    expect(newDeck.createDeck().length)
      .to
      .equal(52);
  })
  it('shuffle function should return an array', () => {
    newDeck.createDeck()
    expect(newDeck.shuffle())
      .to
      .be
      .an('array');
  });

})
