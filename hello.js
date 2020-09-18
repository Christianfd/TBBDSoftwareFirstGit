const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Whait is your name?", function(name){
    console.log(`Hello ${name}, welcome to my repository`);
    rl.close();
});

rl.on("close",function(){
    console.log("\nBYE BYE !!!");
    process.exit(0);
});