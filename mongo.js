require('dotenv').config()
const mongoose = require('mongoose')

const password = process.env.MONGODB_PASSWORD

const url =
  `mongodb+srv://gersonsilva107:${password}@cluster0.7t4jnco.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note1 = new Note({
  content: 'HTML is Easy',
  important: true,
})

const note2 = new Note({
  content: 'CSS is hard',
  important: false,
})

// const note = new Note({
//   content: 'Mongoose makes things easy',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})