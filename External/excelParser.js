var xlsx = require('node-xlsx').default
var fs = require("fs");

/**
 * Function that gets all data from excel file. File its located on the fileName.
 * @param {String} fileName 
 */
var excelParser = function(fileName){
    console.log('Archivo: ' + String(fileName) + ' recibido.')
    //const workSheetsFromFile = xlsx.parse('fileName');
    const workSheetsFromFile = xlsx.parse(fileName);
   // console.log('Original data: ')
    //console.log(workSheetsFromFile[0].data)
    return workSheetsFromFile[0].data
}

module.exports.excelParser = excelParser