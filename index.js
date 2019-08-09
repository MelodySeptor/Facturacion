var express = require('express')
var excelParser = require('./External/excelParser')
var dataBlock = require('./External/dataBlock')
var pdfCreator = require('./External/pdfCreator')
var bodyParser = require('body-parser');
var app = express()

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('upload')
})

app.post('/fileupload', function(req, res){
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
    pdfCreator.createPDF(dataBlock.users)
    res.render('confirmacion')
    process.exit(1)
})

app.listen(8080, function(){
    console.log("Server Up.")
})
