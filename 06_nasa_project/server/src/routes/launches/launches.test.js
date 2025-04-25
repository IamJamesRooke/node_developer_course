const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('Should respond with 200 Success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
    });
});

describe('Test POST /launches', () => {
    
    test('Should respond with 200 Success', () => {

    });

    test('Should catch missing required properties.', () => {});
    
    test('Should catch invalid dates.', () => {});
})