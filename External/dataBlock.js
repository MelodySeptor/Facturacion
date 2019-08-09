function UserTemplate(){
    this.name=''
    this.surname=''
    this.code=''
    this.import=''
    this.reason=''
}

var processUsersToSystem = function(usersList){
    userAux = usersList.map(function(number){
        padding = 2
        userFinal = new UserTemplate()
        
        userFinal.surname = number[0].substring(0, number[0].lastIndexOf(','))
        userFinal.name = number[0].substring(number[0].lastIndexOf(',')+padding, number[0].lastIndexOf('('))
        userFinal.code = number[0].substring(number[0].lastIndexOf('(')+1, number[0].lastIndexOf(')'))
        userFinal.import = number[1]
        userFinal.reason = number[2]

        return userFinal
    })

    //console.log(userAux)
    return userAux
}

var users=[]

module.exports.processUsersToSystem = processUsersToSystem
module.exports.users = users
