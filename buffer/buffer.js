'use strict'

const Buffer = require('buffer').Buffer

let myBuffer = Buffer.from(textOneData)

console.log(myBuffer.toString('utf-8', 0, 8))
