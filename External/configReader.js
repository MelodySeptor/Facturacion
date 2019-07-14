var file = require("fs");

var testConfigurations = function(){
    var correct = false
    //@TODO
    correct ? console.log("Opciones correctas") : console.log("Opciones incorrectas");process.exit(1)
}

var readConfigurations = function(fileName){
    console.log("Getting option from: " + fileName); 

    var content = file.readFileSync(fileName);
    console.log("Options: " + content);

    testConfigurations()
}

module.exports.readConfigurations = readConfigurations