const express = require('express');
const config = require('./config/config');

async function startServer() {
    const app = express();

    await require('./loaders')(app);

    app.listen(config.port, err => {
        console.log(`Server listening on port: ${config.port}`)

    });
}

startServer();