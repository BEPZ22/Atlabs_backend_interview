const express = require('express');
const tokenService = require('./routes/simpleAsyncTokenService')

module.exports = () => {
    const app = express.Router();
    
    tokenService(app);

    return app
}