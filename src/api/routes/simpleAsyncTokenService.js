const app = require('express')
const bodyParser = require('body-parser');
const simpleAsyncTokenService = require('../../services/2_3_exercise/simpleAsyncTokenService');
const route = app.Router();

module.exports = (app) => {
    app.use('/authetication', route);

    route.use(bodyParser.json()) // for parsing application/json
    route.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    /** Authenticate user */
    route.post('/requestToken', simpleAsyncTokenService.requestToken);


};