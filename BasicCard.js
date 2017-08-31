var inquirer = require("inquirer");
var cardLibrary = require("./basic.json");
// var input = process.argv[2];
function BasicCard(front, back){
  this.front = front;
  this.back = back;
};
console.log(cardLibrary[0].back);

var cardCount = 0;

var cards = function(cardCount){
  if (cardCount < cardLibrary.length) {
    console.log("");
    console.log(cardCount);
    inquirer.prompt({
        name: "question",
        message: cardLibrary[cardCount].front
    }).then(function(answers){
      if (cardLibrary[cardCount].back === (answers.question).toLowerCase()) {
        console.log("");
        console.log("correct");
        console.log("");
        console.log("Awnser: " + cardLibrary[cardCount].back);
        cardCount++;
        cards(cardCount);
      }else {
        console.log("");
        console.log("incorrect");
        console.log("");
        console.log("Awnser: " + cardLibrary[cardCount].back);
        cardCount++;
        cards(cardCount);
      }
    })
  }
}

cards(cardCount);





var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
// // "Who was the first president of the United States?"
// if (input === "front") {
  console.log(firstPresident.front);
// }
// if (input === "back") {
//   // "George Washington"
//   console.log(firstPresident.back);
// }
