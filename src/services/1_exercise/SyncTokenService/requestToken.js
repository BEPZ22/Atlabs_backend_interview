const authenticate = require('./authenticate');
const issueToken = require('./issueToken');
module.exports = {
    requestToken : (  )=>{
        userID = authenticate.authenticate(  )
        if ( userID ){
            userToken = issueToken.issueToken(  )
            if ( userToken ){
                return userToken;
            }
        }
    }
}

