const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const content = process.argv[3]
const important = process.argv[4]

const url = `mongodb+srv://manmohan123:${password}@manmohanscluster.gkc1ed6.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: content,
  important: important,
})

note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({ important: true }).then(result => {
//     result.forEach(note => {
//         console.log(note);
//     })
//     mongoose.connection.close();
// })
