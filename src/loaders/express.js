const bodyParser = require('body-parser');
const routes = require('../api')

module.exports = async(app) => {

    /** Enable CORS requests */
    app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-HTTP-Method-Override");
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            next();
        })

    /** Delay between 0 to 5000 the response */
    app.use( ( req, res, next ) => {
        setTimeout(next, Math.floor( ( Math.random() * 5000 ) + 0 ) );
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(routes());
    
    return app;
}