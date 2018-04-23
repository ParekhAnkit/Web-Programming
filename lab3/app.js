// JavaScript source code
const file = require("./fileData.js")
const text = require("./textMetrics.js")
const fs = require('fs');

async function dowork(name) {
    let jsonname;

    if ((!name) || (typeof (name) != "string")) {
        throw "File name should be String";
    }
    
    let requiredname = name.split(".")
    jsonname = requiredname[0] + ".result.json";

    if (fs.existsSync(jsonname)) {
        const printresult = await file.getFileAsJSON(jsonname);
        
        console.log(printresult);
       
    }

    else {
        const printresult = await file.getFileAsString(name);
        let simplifiedText = text.simplify(printresult);
        let debugFileCreate = await file.saveStringToFile(requiredname[0] + ".debug.txt", simplifiedText );
        let metricText = text.createMetrics(simplifiedText);
        
        let finalResult = await file.saveJSONToFile(jsonname, metricText);
        console.log(metricText);

            
        
    }

}

dowork("chapter1.txt");
dowork("chapter2.txt");
dowork("chapter3.txt");








