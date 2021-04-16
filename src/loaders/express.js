const bodyParser = require('body-parser');
const routes = require('../api')

module.exports = async(app) => {

    //Enable CORS requests
    app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-HTTP-Method-Override");
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            next();
        })

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(routes());
    // Return the express app
    return app;
}