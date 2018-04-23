// JavaScript source code

const bluebird = require("bluebird");

const fs = bluebird.promisifyAll(require("fs"));

let strin = "hello, mr, how,do,you,   do";
strin = strin.split(",");

const fd = require("./fileData");
    
console.log(fd.getFileAsString("chapter1.txt"));
