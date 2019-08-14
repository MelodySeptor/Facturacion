var express = require('express')
var excelParser = require('./External/excelParser')
var dataBlock = require('./External/dataBlock')
var pdfCreator = require('./External/pdfCreator')
var formidable = require('formidable');
var bodyParser = require('body-parser');
var app = express()

/**
 * Configuration Express.
 */
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));

var pathFileOut = ''

/**
 * Index
 */
app.get('/', function(req, res){
    res.render('upload')
})

/**
 * Stores the file on ./temp
 */
app.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = './temp/' + 'tempFile.xlsx';
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.redirect('/recibo')
        });
    })
})

/**
 * Read Excel and process all users into the system.
 * For user: show view with all users and total.
 */
app.get('/recibo', function(req, res){
    dataBlock.users = excelParser.excelParser('./temp/tempFile.xlsx')
    dataBlock.users = dataBlock.processUsersToSystem(dataBlock.users)
    pathFileOut = require('path').join(require('os').homedir(), 'Desktop') + "\\recibos"+new Date().getTime()
    //console.log(dataBlock.users)
    var aux = dataBlock.users
    res.render('principal', {aux:aux})
})

/**
 * Create a new PDF with all users.
 * For user: show view with confirmation and instructions.
 */
app.post('/genRecibos', function(req, res){
    pdfCreator.createPDF(dataBlock.users, pathFileOut)
    res.render('confirmacion')
})

/**
 * Server.
 */
app.listen(8080, function(){
    console.log("Aplicación activada. Por favor, cierre esta ventana una vez se acabe de utilizar.")
})
