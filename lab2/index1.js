// JavaScript source code


const print = require("./printShape");
const prompt = require("prompt");

function getInfo() {

    prompt.start();

    function stringToOperation(str) {
        if (!str) return "triangle";
        if (str==="1" || str === "triangle") return "triangle";
        if (str === "2" || str === "square") return "square";
        if (str === "3" || str === "rhombus") return "rhombus";
        return "triangle";
    }

    const info = {
        name: 'information',
        description: 'This is the print shape App\n You can select to draw by using numbers or shape name\n 1-triangle\n 2-square\n 3-rhombus',

    };
    const operation = {
        name:'operation',
        description: ' Which shape you want to create ? ',
        type: 'string',
        default: 'triangle',
        required: true
    };


    const numofLines = {
        name: 'lines',
        description: 'How many lines you want to use for the figure?',
        type: 'number',
        required: true
    };

    const quitPrompt = {
        name: 'quit',
        description: 'Do you want to Quit ?',
        type: 'boolean',
        default: 'false',
        required: true
    };
    prompt.get([info, operation, numofLines, quitPrompt], function (err, result) {
        if (result) {
            //console.log(lines);
            
            

            switch (stringToOperation(result.operation)) {
                case "triangle":
                    console.log("Your desired figure is")
                    print.triangle(result.lines);
                    break;
                case "square":
                    console.log("Your desired figure is")
                    print.square(result.lines);
                    break;
                case "rhombus":
                    console.log("Your desired figure is")
                    print.rhombus(result.lines);
                    break;

                    


            }

        }
        if (!result.quit) {
            getInfo();
        }
        else if (err) {
            console.error(err)

        }

        
    });










}
getInfo();













