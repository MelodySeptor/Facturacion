var file = require("fs");
///////////////////////////////////////////
/// UNUSED BUT CAN BE USEFULL ON FUTURE ///
///////////////////////////////////////////

var testConfigurations = function(content){
    var correct = false
    if(!isNaN(String(content).substring(1))){
        if(isNaN(String(content).substring(0,1))){
            correct = true
        }
    }
    correct ? console.log("Opciones correctas") : console.log("Opciones incorrectas");process.exit(1)
}

var readConfigurations = function(fileName){
    console.log("Obteniendo opciones de: " + fileName); 

    var content = file.readFileSync(fileName);
    console.log("Opciones: " + content);

    testConfigurations(content)
    return content
}

module.exports.readConfigurations = readConfigurations