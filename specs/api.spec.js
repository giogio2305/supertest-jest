const request = require('supertest');

const config = require('../config/config');
const requestData = require('../testData/requestData');
const responseData = require('../testData/responseData');
const mockServer = require('../mocks/testAPI');
const sequelize = require('../config/sequelize');
const Restaurant = require('../database/mydb/restaurant');

describe('JS BDD API testing', () => {
     beforeAll(async()=>{
        await mockServer();
         await sequelize.authenticate();
         await sequelize.sync({ force: false });
     }
    );

    it('Get from api', async () => {
        const res = await request(config.host)
            .get(config.getAPI)
            .send()
            .expect(200);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(responseData.getAPI);
    });

    it('Post to api', async () => {
    const res = await request(config.host)
        .post(config.postAPI)
        .send(requestData.postAPI)
        .expect(201);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(responseData.postAPI);

    });

    it('Get from mock server', async () => {
        const res = await request('http://api.test.com')
        .get(config.getMockAPI).send().expect(200);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(responseData.mockGetAPI);
    });

    it('Get tester 1 from mock server', async () => {
        const res = await request('http://api.test.com')
            .get('/tester/1').send().expect(200);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(responseData.GetTester1);
    });

    it('Get restaurant Maison H from database', async () => {
        const restaurant = await Restaurant.findByPk(17);
        console.log(restaurant);
        // expect(restaurant).toHaveLength(1);
    });

    afterAll(async()=>{
        await sequelize.close();
    });

});