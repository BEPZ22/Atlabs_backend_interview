const authenticate = require('./authenticate');
const issueToken = require('./issueToken');

module.exports = {
    requestToken : async( credentials )=>{
        try {
            userID = await authenticate.authenticate( credentials )
            if ( userID ){
                userToken = await issueToken.issueToken( userID )
                if ( userToken ){
                    return userToken;
                }
            }
        } catch (error) {
            console.log("Hubo un error", error)
        }
    }
}