const request = require('supertest');
const app = require('../index');
const {ObjectID} = require('mongodb');

const profits = require('./seed');
const Profit = require('./model');

jest.setTimeout(500);

beforeEach(async (done) => {
  await Profit.remove({});
  await Profit.insertMany(profits);
  return done();
});

describe('GET /profits', () => {
  test('should get all profits', (done) => {
    request(app)
      .get('/profits')
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toBe(profits.length);
      })
      .end(done);
  });
});

describe('GET /profits/:id', () => {
  test('should get one profit by id', (done) => {
    const profit = profits[0];

    request(app)
      .get(`/profits/${profit._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.amount).toBe(profit.amount);
        expect(res.body.name).toBe(profit.name);
        expect(new Date(res.body.year)).toEqual(profit.year);
      })
      .end(done);
  });

  test('should return 404 for invalid id', (done) => {
    request(app)
      .get('/profits/123')
      .expect(404)
      .end(done);
  });

  test('should return 404 existent profit', (done) => {
    const id = new ObjectID().toHexString();

    request(app)
      .get(`/profits/${id}`)
      .expect(404)
      .end(done);
  });
});

describe('POST /profits', () => {
  test('should create a new profit', (done) => {
    const profit = {
      amount: 200,
      month: 3,
    };

    request(app)
      .post('/profits')
      .send(profit)
      .expect(200)
      .expect((res) => {
        expect(res.body.amount).toBe(profit.amount);
        expect(res.body.month).toBe(profit.month);
      })
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }

        try {
          const profits = await Profit.find({});
          expect(profits.length).toBe(4);
          return done();
        } catch (err) {
          return done(err);
        }
      });
  });

  test('should reject invalid profit', (done) => {
    request(app)
      .post('/profits')
      .send({})
      .expect(400)
      .end(async (err, res) => {
          if (err) {
              return done(err);
          }

          try {
            const profits = await Profit.find({});
            expect(profits.length).toBe(3);
            return done();
          } catch (err) {
            return done(err);
          }
      });
  });
});

describe('PUT /profits/:id', () => {
  test('should update profit', (done) => {
    const profit = profits[0];

    request(app)
      .put(`/profits/${profit._id.toHexString()}`)
      .send({amount: 300})
      .expect(200)
      .expect((res) => {
        expect(res.body.amount).toBe(200);
        expect(res.body.month).toBe(profit.amount);
      })
      .end(done);
  });

  test('should return 404 for invalid id', (done) => {
    request(app)
      .put('/profits/123')
      .send({amount: 300})
      .expect(404)
      .end(done);
  });

  test('should return 404 existent profit', (done) => {
    const id = new ObjectID().toHexString();

    request(app)
      .put(`/profits/${id}`)
      .send({amount: 300})
      .expect(404)
      .end(done);
  });
});

describe('DELETE /profits/:id', () => {
  test('should delete profit', (done) => {
    const id = profits[0]._id.toHexString();

    request(app)
      .delete(`/profits/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body._id).toBe(id);
      })
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }

        try {
          const profit = await Profit.findById(id);
          expect(profit).toNotExist();
          return done();
        } catch (err) {
          return done(err);
        }
      });
  });

  test('should return 404 for invalid id', (done) => {
    request(app)
      .delete('/profits/123')
      .expect(404)
      .end(done);
  });

  test('should return 404 existent profit', (done) => {
    const id = new ObjectID().toHexString();

    request(app)
      .delete(`/profits/${id}`)
      .expect(404)
      .end(done);
  });
});
