function sumOfSquares(num1, num2, num3) {
    return (num1 * num1) + (num2 * num2)+(num3 * num3)
}

console.log(sumOfSquares(5, 3, 10));

function sayHelloTo(firstName, lastName, title) {
    if (firstName != null && lastName == null && title == null) {
        if (typeof firstName != 'string') {

            throw " Input Not a string";
        }
        let string1 = 'Hello,' + firstName;
        console.log(string1);
    }
    if (firstName != null && lastName != null && title == null) {
        if (typeof firstName != 'string' || typeof lastName != 'string') {
            throw " Input Not a string";
        }
        let string1 = 'Hello, ' + firstName + ' ' + lastName + '.I hope you are having a good day!';
        console.log(string1);
    }
    if (firstName != null && lastName != null && title != null) {
        if (typeof firstName != 'string' || typeof lastName != 'string' || typeof title != 'string') {
            throw " Input Not a string";
        }
        let string1 = 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '! Have a good evening!';
        console.log(string1);
        
    }
    if (firstName == "" || lastName == "" || title == "") {
        throw "Empty string not accepted"
    }

    if (firstName == undefined && lastName == undefined && title == undefined) {
        throw "No String";
    }
}


function cupsOfCoffee(num)
{
    if (Number.isInteger(num) == false || num <= 0 || typeof num == undefined) {
        throw "Entered Value should be a number";
    }

    for (i = num; i >= 1; i--){
        if (i > 2) {
            let string1 = i + ' cups of coffee on the desk! ' + i + ' ' + 'cups of coffee!';
            let string2 = 'Pick one up, drink the cup, ' + (i - 1) + ' cups of coffee on the desk!';
            console.log(string1);
            console.log(string2);
        }
        else if (i == 2)
        {
            let string1 = i + ' cups of coffee on the desk! ' + i + ' ' + 'cups of coffee!';
            let string2 = 'Pick one up, drink the cup, ' + (i - 1) + ' cup of coffee on the desk!';
            console.log(string1);
            console.log(string2);
        }
        else
        {
            let string1 = i + ' cups of coffee on the desk! ' + i + ' ' + 'cups of coffee!';
            let string2 = 'Pick it up, drink the cup, no more coffee left on the desk!';
            console.log(string1);
            console.log(string2);
  
        }
    }
}
/*function occurrencesOfSubstring(fullstring,substring)
{
    let string1 = fullstring;
    list1 = string1.split(' ')
    count = list1.length
    let string2 = substring;

    let n = string2.length;

    for (i = count; i <= 0; i--){
        m1 = list1[i]
        let m = m1.length;
        for (j = 0; j <= m; j++) {
            for(k=0;k<=n;k++)
        }

    }
}
*/
function occurrencesOfSubstring(fullstring, substring)
{
    let count = 0;
    if (fullstring == "" || substring == "") {
        throw "Empty string entered"
    }
    if (typeof fullstring != 'string' || typeof substring != 'string') {
        throw "Type of Input is not String";
    }

    for (i = 0; i <= fullstring.length; i++) {
        let concat = '';
        n = i;
        for (j = 0; j < substring.length; j++) {
            
            concat = concat + fullstring[n];
            
            n++;
            


        }
        if (concat == substring)
            count++;
    }
    console.log(count)
}
function randomizeSentences(paragraph) {
    if (paragraph == "") {
        throw "Empty string entered"
    }

    let array = [];
    let index = 0;
    let arrayindex = 0
    if (paragraph.includes(".") || paragraph.includes("!") || paragraph.includes("?")) {
        for (let i = 0; i < paragraph.length; i++) {
            if (paragraph.charAt(i) == "." || paragraph.charAt(i) == "!" || paragraph.charAt(i) == "?") {
                let str = paragraph.substring(index, i + 1);
                index = i + 2;
                array[arrayindex] = str;

                arrayindex++;
            }

        }

        function random(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            let resultString = "";
            for (let j = 0; j < a.length; j++) {
                resultString += a[j] + " ";
            }
            return resultString;
        }
        let randomize = random(array);

        console.log(randomize);
    }
}
sayHelloTo("Ankit");
sayHelloTo("Ankit","Parekh");
sayHelloTo("Ankit", "Parekh", "Mr.");
cupsOfCoffee(3);
occurrencesOfSubstring("hello world", "o");
occurrencesOfSubstring("Helllllllo, class!", "ll");
randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");