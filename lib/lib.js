'use strict';
module.exports = exports = {}
const fs = require('fs');
const Buffer = require('buffer').Buffer;
exports.firstDoc = [];
exports.secondDoc = [];
exports.thirdDoc = [];
exports.hexOrder = [];

let runall = function(){

  {fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let theBuffOne = Buffer.from(textData)
  console.log(theBuffOne.toString('hex', 0, 8))
  let bufferOne =  theBuffOne.toString('hex', 0, 8)
  exports.hexOrder.push(bufferOne)
  exports.firstDoc.push(bufferOne)
  // console.log('array working', hexOrder);

})


fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err
  console.log('thing ', `${__dirname}/data/two.txt`);
  // console.log(data.toString());
  let textData = data.toString();

  let theBuffTwo = Buffer.from(textData)
  console.log(theBuffTwo.toString('hex', 0, 8))
  let bufferTwo =  theBuffTwo.toString('hex', 0, 8)
  exports.hexOrder.splice(1, 0, bufferTwo);
  exports.secondDoc.push(bufferTwo);
  // console.log('second array item working', hexOrder);

})


fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err
  // console.log(data.toString());
  let textData = data.toString();

  let theBuffThree = Buffer.from(textData)
  console.log(theBuffThree.toString('hex', 0, 8))
  let bufferThree =  theBuffThree.toString('hex', 0, 8)
  exports.hexOrder.splice(2, 0, bufferThree);
  exports.thirdDoc.push(bufferThree);
  console.log(exports.hexOrder);

})
}
}

runall();
console.log(exports.firstDoc);
console.log(exports.secondDoc);
console.log(exports.thirdDoc);
