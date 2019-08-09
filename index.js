var express = require('express')
var excelParser = require('./External/excelParser')
var dataBlock = require('./External/dataBlock')
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

app.get('/genRecibos', function(req, res){
    res.render('confirmacion')
})

app.listen(8080, function(){
    console.log("Server Up.")
})
