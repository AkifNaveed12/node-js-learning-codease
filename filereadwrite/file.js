// creating and writing into a file

const fs = require('fs');
fs.writeFileSync("./writetest.txt", "this filw was created using sync file read ");
fs.writeFile("./writetest.txt", "overridden content through async file write", (e)=>e);// file path, data, call back

// reading the file
const read = fs.readFileSync("./contacts.txt", "utf-8"); //file path, encoding scheme
console.log(read);
