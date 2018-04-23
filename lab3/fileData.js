// JavaScript source code
const bluebird = require("bluebird");

const fs = bluebird.promisifyAll(require("fs"));

module.exports = {

    getFileAsString: async function (path) {

        try {
            let obj;

            obj = await fs.readFileAsync(path, "utf-8");
            //console.log(obj);
            return obj;
        }
        catch (ex) {

            throw ex;

        }


    },

    getFileAsJSON: async function (path) {
        try {
            const JSONobj = await fs.readFileAsync(path, "utf-8");
  
            return JSONobj;
        }
        catch (ex) {
            console.log(ex);
        }
        },
        



    




    saveStringToFile : async function (path, text) {
        try {

            const saveobj = await fs.writeFileAsync(path, text, "utf-8");
            return true;

        }
        catch (ex) {
            console.log(ex);

        }
        
          
            
        },


   

    saveJSONToFile: async function (path, obj) {
        try {
           
            const content = JSON.stringify(obj)
            await fs.writeFileAsync(path, content, "utf-8");

           
            return true;
        }
        catch (ex) {
            console.log(ex);
            
        }
    }


}