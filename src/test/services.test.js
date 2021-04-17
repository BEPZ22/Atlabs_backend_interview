var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp)
// const fetch = require('node-fetch');
const expect = chai.expect;
const should = chai.should;
/** Services */
const authentication = require('../services/authetication')
const user = require('../services/user')

/** Api */
const simpleAsyncTokenServiceEndPoint = require('../api/routes/simpleAsyncTokenService')

const url = `localhost:3001`

describe('Pruebas tanto de servicios como de la API', () => {

    describe('Authentication - 1: caso exitoso', () => {
        it('Debería ser un userId igual a braulio', async () => {
            const result = await authentication.authentication({ "username": "braulio", "password" : "BRAULIO" });
            expect(result).to.equal("braulio");
         });
    });

    describe('Authentication -2 : cuando envío una contraseña que no funciona', () => {
        it('Debería devolver undefined', async () => {
            const result = await authentication.authentication({ "username": "braulio", "password" : "Braulio" });
            expect(result).to.be.undefined;
         });
    });

    describe('User - 1 : caso exitoso', () => {
        it('Debería devolver el token braulio_UTCTIME', async () => {
            const result = await user.user("braulio");
            expect(result).to.be.string;
         });
    });

    describe('User - 2 : caso en el que el userID comience con "A"', () => {
        it('Debería devolver undefined', async () => {
            const result = await user.user("Armando");
            expect(result).to.be.undefined
         });
    });

    /** Using de API calling the endpoint */

    describe('API - 1: caso de exitoso',()=>{
        it('Debería devolver un JSON con los objetos del userID y userToken', async () => {
            const response = await chai.request(url).post('/authetication/requestToken').send({ username:"braulio", password: "BRAULIO"})
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('userID').equal("braulio").to.be.a('String');
            expect(response.body).to.have.property('token').to.be.a('String');
        });
    });

    describe('API - 2: caso de contraseña incorrecta',()=>{
        it('Debería devolver un JSON con un mensaje', async () => {
            const response = await chai.request(url).post('/authetication/requestToken').send({ username:"braulio", password: "Braulio"})
            expect(response.body).to.have.property('message').to.be.a('String');
        });
    });

    describe('API - 3: caso de username que inicia con "A"',()=>{
        it('Debería devolver un JSON con un mensaje', async () => {
            const response = await chai.request(url).post('/authetication/requestToken').send({ username:"Armando", password: "ARMANDO"})
            expect(response.body).to.have.property('message').to.be.a('String');
        });
    });
});

        
