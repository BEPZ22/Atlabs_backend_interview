module.exports = {
    requestToken : ( credentials )=>{
        userID = authenticate( credentials )
        if ( userID ){
            userToken = issueToken( userID )
            if ( userToken ){
                return userToken;
            }
        }
    }
}