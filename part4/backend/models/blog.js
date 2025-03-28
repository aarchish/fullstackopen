// const config = require('../utils/config')
// const logger = require('../utils/logger')
const mongoose = require('mongoose')

// mongoose.set('strictQuery',false)
// console.log('connecting to mongoDB')
// const url = config.MONGO_URI
// //const mongoUrl = 'mongodb+srv://fso-p3:aarchish@part-3.zo9m8.mongodb.net/bloglist?retryWrites=true&w=majority&appName=Part-3'

// mongoose.connect(url)
//   .then(() => {
//     logger.info('connected to MongoDB')
//   })
//   .catch((error) => {
//     logger.error('error connecting to MongoDB:', error.message)
//   })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Blog', blogSchema)