const error_handler = require ('../errors/error') 

module.exports = {

    user : async( userID, res )=>{
        try {
            if (userID.charAt(0) != 'A'){
                return userID + new Date(new Date().toUTCString());
            }
        } catch (error) {
            err = error_handler(error)
            return res.json(err).status(400);
        }
    }
}