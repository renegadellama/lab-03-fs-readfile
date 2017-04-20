'use strict';

const fs = require('fs')
const Buffer = require('buffer').Buffer

let textOne  = function () {fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let bufferOne = Buffer.from(textData)
  // console.log(bufferOne.toString('hex', 0, 8))
  return bufferOne.toString('hex', 0, 8)

})
}

let textTwo = function() {fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let bufferTwo = Buffer.from(textData)
  // console.log(bufferTwo.toString('hex', 0, 8))
  return bufferTwo.toString('hex', 0, 8)

})
}

let textThree = function() {fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let bufferThree = Buffer.from(textData)
  // console.log(bufferThree.toString('hex', 0, 8))
  return bufferThree.toString('hex', 0, 8)

})
}

setTimeOut(textOne(), 5000)
textTwo();
textThree();

console.log(textOne());
console.log(textTwo());
console.log(textThree());
