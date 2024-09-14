const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../src/app'); 

describe('GET /', () => {
  it('responds with index.html', (done) => {
    request(app) 
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});