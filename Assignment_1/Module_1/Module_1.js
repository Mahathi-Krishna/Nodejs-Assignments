const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var fsRead = fs.readFileSync("./filenames.txt");
var arr = fsRead.toString().trim().split("\n");

var fileData = "Hello, This is Assignment 1";

rl.question("Enter a file name : ", (data) => {
    rl.close();
    
    if(arr.length == 1 && arr[0] == ''){
        fs.writeFile("./filenames.txt", data+"\n", (err) => {
            if(err){ console.log(err); }
            else { console.log("Filenames.txt updated with new file name"); }
        });

        fs.writeFile("./Files/"+data, fileData, (err) => {
            if(err){ console.log(err); }
            else { console.log("Create new file - "+data+".txt"); }
        });
    }
    else{
        for(i=0;i<arr.length;i++){
            if(arr[i] == data){
                console.log(`Error: File with name - ${data} already exists`);
                process.exit();
            }
        }

        fs.appendFile("./filenames.txt", data+"\n", (err) => {
            if(err){ console.log(err); }
            else { console.log("Filenames.txt updated with new file name"); }
        });

        fs.writeFile("./Files/"+data, fileData, (err) => {
            if(err){ console.log(err); }
            else { console.log("Create new file - "+data+".txt"); }
        });
    }
});