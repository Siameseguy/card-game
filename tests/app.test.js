const chai = require('chai');
const Deck = require('../src/app');
const expect = chai.expect;

describe('Deck', () => {
  before(() => {
    newDeck = new Deck();
  });

  it('should have a function called createDeck', () => {
    expect(typeof newDeck.createDeck)
      .to
      .equal('function');
  })
})
