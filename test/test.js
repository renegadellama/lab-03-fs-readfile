'use strict';

const hexValues = require('../index.js')
const expect = require('chai').expect
const Buffer = require('buffer').Buffer
const fs = require('fs')

describe('fs module', function(){
  describe('hexVal', function(){
    it('The first document hex value should be first in the array', done => {
      expect(hexValues.firstDoc[0]).to.deep.equal(hexValues.hexOrder[0])
      done()
    })
    it('The second document hex value should be second in the array', done => {
      expect(hexValues.secondDoc[0]).to.deep.equal(hexValues.hexOrder[1])
      done()
    })
    it('The third document hex value should be third in the array', done => {
      expect(hexValues.thirdDoc[0]).to.deep.equal(hexValues.hexOrder[2])
      done()
    })
  })
});
