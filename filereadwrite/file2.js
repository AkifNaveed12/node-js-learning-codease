const fs = require("fs");

// blocking ()sync

console.log("1")
const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log("2")

// non-blocking ()async

console.log("1")
const result1 = fs.readFile("contacts.txt", "utf-8", (err, result) =>{
    console.log(result)
});
console.log(result1);

console.log("2");

const os = require("os");
console.log(os.cpus().length);