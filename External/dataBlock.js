/**
 * Function that represents an object to create every User.
 */
function UserTemplate(){
    this.name=''
    this.surname=''
    this.code=''
    this.import=''
    this.reason=''
}

/**
 * Function that gets total import of all users.
 * @param {List of UserTemplate} users 
 */
var getTotalImport = function(users){
    var total = 0
    for(var i=0;i<users.length;i++){
        total = total + users[i].import
        //console.log(total)
    }
    //console.log(total)
    return total
}

/**
 * Function that gets the list cleaned of invalid selections.
 * @param {List of UserTemplate} users 
 */
var getUserListCleaned = function(users){
    var userAux=[]
    for(var i=0;i<users.length;i++){
        if(users[i]!=null){
            //console.log(userAuxAux[i])
            userAux.push(userAuxAux[i])
        }
    }
    return userAux
}

/**
 * Function that prepares User List to be sended and showed.
 * @param {List of UserTemplate} users 
 */
var prepareFinalUserList = function(users){
    var userAux=[]
    userAux = getUserListCleaned(users)
    
    var userAuxFinal = new UserTemplate()
    userAuxFinal.surname="Total"
    userAuxFinal.name="-"
    userAuxFinal.code="-"
    userAuxFinal.import = getTotalImport(userAux)
    userAuxFinal.reason="-"

    userAux.push(userAuxFinal)
    return userAux
}

/**
 * Function that process all users into the system.
 * @param {List of UserTemplate} usersList 
 */
var processUsersToSystem = function(usersList){

    userAuxAux = usersList.map(function(number){
        if(number.length>=3 && number[0]!=null && number[1]!=null && number[2]!=null){

            padding = 2
            userFinal = new UserTemplate()
            
            userFinal.surname = number[0].substring(0, number[0].lastIndexOf(','))
            userFinal.name = number[0].substring(number[0].lastIndexOf(',')+padding, number[0].lastIndexOf('('))
            userFinal.code = number[0].substring(number[0].lastIndexOf('(')+1, number[0].lastIndexOf(')'))
            userFinal.import = number[1]
            userFinal.reason = number[2]

            return userFinal
        }
    })

    var userAux=[]

    userAux = prepareFinalUserList(userAuxAux)
    return userAux
}

var users=[]

module.exports.processUsersToSystem = processUsersToSystem
module.exports.users = users
