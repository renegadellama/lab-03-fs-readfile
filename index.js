'use strict';

const fs = require('fs')
const Buffer = require('buffer').Buffer
let orderArray = []

let textOne = function(){fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let theBuffOne = Buffer.from(textData)
  console.log(theBuffOne.toString('hex', 0, 8))
  let bufferOne =  theBuffOne.toString('hex', 0, 8)
  return bufferOne

})
}

let textTwo = function() {fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let bufferTwo = Buffer.from(textData)
  console.log(bufferTwo.toString('hex', 0, 8))
  return bufferTwo.toString('hex', 0, 8)

})
}

let textThree = function() {fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let bufferThree = Buffer.from(textData)
  console.log(bufferThree.toString('hex', 0, 8))
  return bufferThree.toString('hex', 0, 8)

})
}


let first = textOne();
let second = textTwo();
let third = textThree();

rightOrder(first, second, third);

function rightOrder(a, b, c) {
  return a, b, c;
};



// var correctOrder = rightOrder(first, second, third);
//
// setTimeout(rightOrder(first, second, third), 5000);
//
// function rightOrder(hexOne, hexTwo, hexThree) {
//   return hexOne, hexTwo, hexThree;
// }
