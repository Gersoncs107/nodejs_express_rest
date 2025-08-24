require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Note = require('./models/note')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true
//   }
// ]

// const password = process.env.MONGODB_PASSWORD

// const url =
//   `mongodb+srv://gersonsilva107:${password}@cluster0.7t4jnco.mongodb.net/noteApp?retryWrites=true&w=majority`

// mongoose.set('strictQuery',false)
// mongoose.connect(url)


const generateId = () => {
    const maxId = notes.id > 0 ? Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1
}

app.get('/', (request, response) => {
   Note.find({}).then(notes => {
    response.json(notes)
   })
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/notes', (request, response) => {
  const body = request.body
  
  if(body.content === undefined){
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false
  })
 
  note.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.delete('/api/notes/:id', (request, response, next) => {
 Note.findById(request.params.id)
 .then(result => {
  response.status(204).end()
 })
 .catch(error => next(error))
 
})

const PORT =  process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
