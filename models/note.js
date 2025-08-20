const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_PASSWORD

console.log('connecting to', url)