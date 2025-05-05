const { describe, test } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../../app');
const { mongoConnect } = require('../../services/mongo');
const mongoose = require('mongoose');

describe('Launches API', () => {

    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('Test GET /launches', () => {
        test('Should respond with 200 Success', async () => {
            const response = await request(app)
                .get('/launches')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.status).toBe(200);
        });
    });

    describe('Test POST /launches', () => {
        const completeLaunchData = {
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler 186 f',
            launchDate: 'January 4, 2028',
        };

        const launchDataWithoutDate = {
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler 186 f',
        };

        const launchDataWithInvalidDate = {
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler 186 f',
            launchDate: 'cat',
        };

        test('Should respond with 201 created.', async () => {
            const response = await request(app)
                .post('/launches')
                .send(completeLaunchData)
                .expect('Content-Type', /json/)
                .expect(201);

            const requestDate = new Date(completeLaunchData.launchDate).valueOf();
            const responseDate = new Date(response.body.launchDate).valueOf();
            assert.strictEqual(responseDate, requestDate, 'Launch date does not match');

            assert.deepStrictEqual(
                {
                    mission: response.body.mission,
                    rocket: response.body.rocket,
                    target: response.body.target,
                },
                {
                    mission: completeLaunchData.mission,
                    rocket: completeLaunchData.rocket,
                    target: completeLaunchData.target,
                },
                'Launch data does not match'
            );
        });

        test('Should catch missing required properties.', async () => {
            const response = await request(app)
                .post('/launches')
                .send(launchDataWithoutDate)
                .expect('Content-Type', /json/)
                .expect(400);

            assert.deepStrictEqual(response.body, {
                error: 'Missing required launch property.',
            }, 'Error message does not match for missing properties');
        });

        test('Should catch invalid dates.', async () => {
            const response = await request(app)
                .post('/launches')
                .send(launchDataWithInvalidDate)
                .expect('Content-Type', /json/)
                .expect(400);

            assert.deepStrictEqual(response.body, {
                error: 'Invalid launch date.',
            }, 'Error message does not match for invalid date');
        });
    });

})
