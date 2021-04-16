const error_handler = require ('../errors/error') 
const auth = require('./authetication')
const userToken = require ('./user')

module.exports = {

    requestToken: async(req, res) =>{
        try {
            userID = await auth.authentication(req.body)
            
            if (userID){
            
                token = await userToken.user(userID)

                if (token){

                    return  res.json({userID, token}).status(200);

                }else{

                    return res.json({"message": "Estas baneado porque tu nombre de usuario comienza con la letra 'A' "}).status(202);

                }
                
            }else{

                return res.json({"message": "Contraseña incorrecta, intenta de nuevo"}).status(202);

            }
        } catch (error) {
            err = error_handler(error)
            return res.json(err).status(400);
        }

    }
}