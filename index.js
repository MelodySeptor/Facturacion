var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('principal')
})

app.listen(8080, function(){
    console.log("Server Up.")
})

/**
 * Modulos:
 *      - Recoger de excel.
 *      - Generar HTML.
 *      - Generar PDF de HTML.
 */