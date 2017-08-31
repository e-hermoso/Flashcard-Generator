var inquirer = require("inquirer");
var cardLibrary = require("./cloze.json")

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '....');
    this.clozeUpper = this.text.replace(this.cloze, this.cloze.toUpperCase());
    this.printInfo = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze",
            cloze: this.clozeUpper
        };
    };
}

var clozes = [];
var cardCount = 0;

var getWords = function(cardCount){
    if(cardCount < cardLibrary.length){

        console.log("");
        var questionNumber = cardCount + 1;
        console.log(questionNumber);
        var partialQuestionCloze = new ClozeCard(
            cardLibrary[cardCount].partial, cardLibrary[cardCount].cloze);
        var question = partialQuestionCloze.clozeDeleted;

        inquirer.prompt({
            name: "cloze",
            message: question + "\n"
        }).then(function(answers){
            if (cardLibrary[cardCount].cloze == (answers.cloze).toLowerCase()){
                console.log("");
                console.log("Correct!");
                console.log("Awnser: " + cardLibrary[cardCount].partial);
                cardCount++;
                getWords(cardCount);
                clozes.push(answers.cloze);
            }else {
                console.log("");
                console.log("Incorrect!");
                console.log("");
                console.log("Awnser: " + partialQuestionCloze.clozeUpper);
                cardCount++;
                clozes.push(answers.cloze);
                getWords(cardCount);
            }
        })
    }
}
console.log("Complete the movie title or quote");
getWords(cardCount);

