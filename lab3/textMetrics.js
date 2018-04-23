// JavaScript source code



let exp = exports = module.exports;

exp.simplify = function (text) {
    if (text == "null" || text == "undefined" || typeof (text) != "string") {

        console.log("Text Input should be string")
    }
    else { 
   
    let inputText = text.toLowerCase();
    let newinputText = inputText.replace(/[\W_]+/g, " ");
    //inputText = inputText.replace(/\s\s+/g, ' ');
    //inputText = inputText.replace(/[^a-zA-Z0-9+]/g, '');
    return newinputText;
    }

 },

    exp.createMetrics = function (text) {

    if (text == "null" || text == "undefined" || typeof (text) != "string") {

        console.log("Text Input should be string")
    }
    else {
        let inputText = this.simplify(text);
        let temp = inputText;

        if (text == undefined)
            throw "Invalid string";
        else if (text.length == 0)
            throw "insert a string";
        else if (text.constructor !== String)
            throw "insert a string";

        let totalLetters = 0;
        let totalWords = 0;
        let uniqueWords = 0;
        let longWords = 0;
        let numberOfSentences = 0;
        let wordOccurences = 0;
        let sum = 0;


        let temptotalLetters = text.match(/[a-zA-Z]/g);

        totalLetters = temptotalLetters.length;


        let temptotalWords = inputText.split(" ");
        totalWords = temptotalWords.length;

        let tempstring = temp.replace(/[^a-zA-Z0-9+]/g, '');
        sum = tempstring.length;

        for (i = 0; i < temptotalWords.length; i++) {

            if (templongWords = temptotalWords[i].match(/[a-zA-Z]/g) && temptotalWords[i].match(/[a-zA-Z]/g).length > 6)
                longWords++;
        }



        let avgWordLength = sum / totalWords;

        let word = inputText.match(/[^_\W]+/g).join(' ');
        let word1 = word.split(" ");

        let wordOcurrences = {};

        for (let x = 0; x < word1.length; x++) {
            if (!wordOcurrences.hasOwnProperty(word1[x])) {
                wordOcurrences[word1[x]] = 1;
            }
            else {
                ++wordOcurrences[word1[x]];
            }
        }

        uniqueWords = Object.keys(wordOcurrences).length



        let myObj = {
            totalLetters: totalLetters,
            totalWords: totalWords,
            uniqueWords: uniqueWords,
            longWords: longWords,
            averageWordLength: avgWordLength,
            wordOccurences: wordOcurrences
        };



        return (myObj);
    }

 }



