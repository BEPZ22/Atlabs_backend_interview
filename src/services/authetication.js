const error_handler = require('../errors/error');

module.exports = {

    authentication: async(credentials, res) =>{
        try {
            username = credentials.username;
            password = credentials.password;
            if (password == username.toUpperCase()){
                return username;
            }
        } catch (error) {
            err = error_handler(error)
            return res.json(err).status(400);
        }

    }

}