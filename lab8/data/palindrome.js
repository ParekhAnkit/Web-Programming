// JavaScript source code
let exportedMethods = {
    isPalindrome(text) {
        if (typeof text !== "string") throw "Must provide a string";

        return "ALL RIGHT";
    }
}

module.exports = exportedMethods;