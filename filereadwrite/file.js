// creating and writing into a file

const fs = require('fs');
// fs.writeFileSync("./writetest.txt", "this filw was created using sync file read ");
// fs.writeFile("./writetest.txt", "overridden content through async file write", (e)=>e);// file path, data, call back

// reading the file
// const read = fs.readFileSync("./contacts.txt", "utf-8"); //file path, encoding scheme
// console.log(read);

// const Read = fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error: ", err);
//     } else{
//         console.log(result);
//     }
// });

//async requires us to write a call back and then it does'nt provides the ans/data directly
//we have to get it though a call back but in sync we get direct in a variable

//appending data into the files

//fs.appendFileSync("./writetest.txt", `today is ${new Date().getDate().toLocaleString()} !`);


//copying  a file

fs.cpSync("./contacts.txt", "./cpyContacts.txt");



