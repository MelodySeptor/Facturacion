fs = require('fs')
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;

/**
 * Function that get number and returns month.
 * @param {number} number 
 */
var month = function(number){
    switch(number){
        case 0: return 'GENER'
        case 1: return 'FEBRER'
        case 2: return 'MARÇ'
        case 3: return 'ABRIL'
        case 4: return 'MAIG'
        case 5: return 'JUNY'
        case 6: return 'JULIOL'
        case 7: return 'AGOST'
        case 8: return 'SEPTEMBRE'
        case 9: return 'OCTUBRE'
        case 10: return 'NOVEMBRE'
        case 11: return 'DESEMBRE'
    }
}

/**
 * Function that extract last item from list. Let's take off total of import.
 * @param {List of UserTemplate} users 
 */
var preparePDF = function(users){
    var user = []

    for(var i=0;i<users.length-1;i++){
        user.push(users[i])
    }
    return user
}

/**
 * Function that process all List of users and save it as PDF on the path.
 * @param {List of UserTemplate} user 
 * @param {String} pathFile 
 */
var createPDF = function(user, pathFile){
    var d = new Date()

    var users = preparePDF(user)

    doc.pipe(fs.createWriteStream(pathFile +'.pdf'));
    for (var i = 0; i<users.length;i++){
        doc.fontSize(24)
        doc.text('CENTRE D\'ESTUDIS GRANOLLERS',{
            align: 'center',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.fontSize(14)
        doc.text('Tel. 93 861 30 85             centre.d.estudis.granollers@gmail.com',{
            align: 'center',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.moveDown()
        doc.text(month(d.getMonth())+' '+d.getFullYear(),{
            align: 'center',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.moveDown()
        doc.text('          HE REBUT DE '+ users[i].surname+', '+users[i].name+ ' ('+users[i].code+')',{
            align: 'left',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.text('          LA QUANTITAT DE '+ users[i].import+' euros',{
            align: 'left',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.text('          EN CONCEPTE DE '+users[i].reason,{
            align: 'left',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.text('GRANOLLERS, 1' + ' ' + month(d.getMonth()) + ' ' + d.getFullYear(),{
            width: 670,
            align: 'center',
            paragraphGap: 0,
            lineGap: 0
        })
        doc.moveDown()
        doc.moveDown()
        doc.moveDown()
        doc.moveDown()
    }
    doc.end()
}

module.exports.createPDF = createPDF