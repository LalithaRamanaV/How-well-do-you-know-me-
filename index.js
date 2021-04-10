//The Quiz Game
 var readlineSync = require("readline-sync");

var user = readlineSync.question("Hi! What is your name ? ");
console.log("Welcome " + user + " lets play !");
var score = 0;
questionOne = {
  question : "What is my favourite food? ",
  answer: "biryani",
};
questionTwo = {
  question : "Guess when is my birthday month? ",
  answer: "May",
};
questionThree= {
  question : "What is my favourite colour? ",
  answer: "black",
};
questionFour= {
  question : "What is my favourite bike? ",
  answer: "royal enfield",
};
questionFive= {
  question : "Guess what's my favourite cartoon? ",
  answer: "Doeremon",
};

function quiz(question,answer){
  var userans = readlineSync.question(question);
  if(userans.toLowerCase() == answer.toLowerCase()){
    console.log("You are right!" );
    score++;
    console.log("Current Score : " + score);
    console.log("-------------");
  }
  else{
    console.log(" ohoo wrong!");
    score--;
     console.log("Current Score : " + score);
    console.log("-------------");
  }
}
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}
if(score == 5){
  console.log("Yayyy !! you know Lalitha very well!! .. Send her a screenshot!")
}else{
  console.log("Your total score:  " + score);
  console.log("Lets send a screenshot to Lalithanow :))")
}
