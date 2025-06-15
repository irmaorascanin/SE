const request = require('supertest');
const app = require('../server');

describe('GET /api/hello', () => {
  it('should return Hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, world!');
  });

  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/api/nonexistent');
    expect(res.statusCode).toBe(404);
  });

  it('should echo back posted message', async () => {
    const res = await request(app)
      .post('/api/echo')
      .send({ message: 'Test message' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Test message' });
  });
});