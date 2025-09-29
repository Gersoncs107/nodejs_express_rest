const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Note = require('../models/note')

const initialNotes = [
  {
    content: 'HTML is Easy',
    important: true,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: false,
  },
]
  

test('notes are returned as json', async () => {
    await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
afterAll(() => {
    mongoose.connection.close()
})

test('there are two notes', async () => {
  const response = await api.get('/api/notes')

  expect(response.body).toHaveLength(2)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/notes')

  expect(response.body[0].content).toBe('HTML is Easy')
})