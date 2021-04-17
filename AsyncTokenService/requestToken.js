module.exports = {
    requestToken : async( credentials )=>{
        try {
            userID = await authenticate( credentials )
            if ( userID ){
                userToken = await issueToken( userID )
                if ( userToken ){
                    return userToken;
                }
            }
        } catch (error) {
            console.log("Hubo un error", error)
        }
    }
}