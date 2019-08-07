var excelParser = require('excel-parser')

excelParser.worksheets({
    inFile: 'Name'
}, function(err, worksheets){
    console.log(worksheets)
})