'use strict'

const Buffer = require('buffer').Buffer

let myBuffer = Buffer.from('Node.js deals with TCP streams which transport unbroken streams of bytes.  Therefore it may be useful to Buffers in Node.js as oppossed to storing data in string form like we have done in JavaScript.  Buffers store data as binary data, where binary alphanumeric values represent letters, numbers and symbols.  This is beneficial when dealing with TCP streams, which use binary streams of data, and also has the advantage of having a fixed size.')

console.log(myBuffer.toString('hex'))
