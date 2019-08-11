var express = require('express')
var excelParser = require('./External/excelParser')
var dataBlock = require('./External/dataBlock')
var pdfCreator = require('./External/pdfCreator')
var bodyParser = require('body-parser');
var app = express()

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));

var pathFileOut = ''

app.get('/', function(req, res){
    res.render('upload')
})

app.post('/fileupload', function(req, res){
    pathFileOut = req.body.filetoupload.substring(0,req.body.filetoupload.lastIndexOf('.'))
    dataBlock.users = excelParser.excelParser(req.body.filetoupload)
    dataBlock.users = dataBlock.processUsersToSystem(dataBlock.users)
    console.log(dataBlock.users)
    res.redirect('/recibo')
})

app.get('/recibo', function(req, res){
    var aux = dataBlock.users
    res.render('principal', {aux:aux})
})

app.post('/genRecibos', function(req, res){
    pdfCreator.createPDF(dataBlock.users, pathFileOut)
    res.render('confirmacion')
})

app.listen(8080, function(){
    console.log("Aplicación activada. Por favor, cierre esta ventana una vez se acabe de utilizar.")
})
