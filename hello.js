const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function continueChat(){
 rl.question("Want to exit program? y/n",function(answer){
    answer = answer.toLowerCase()
    if (answer == "y" || answer == "yes"){
      rl.close();
    }
    else if (answer == "n" || answer =="no"){
      console.log("Okay, guess we'll just idle here");
    } else {
     continueChat();
    };
  });
};

rl.question("What is your name?", function(name){
    console.log(`Hello ${name}, welcome to my repository`);
    continueChat();
   
});

rl.on("close",function(){
    console.log("Alright, see you later..");
    process.exit(0);
});