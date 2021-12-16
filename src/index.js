const mongoose = require('mongoose');
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/test');
const Book = mongoose.model('Books', { 
  name: String,
  releaseDate: Date
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("A Book API")
})

app.get('/books', (req, res) => {
  res.send(Book.find())
})

app.post('/books', (req, res) => {
  const book = new Book(req.body)
  book.save().then(() => console.log('book saved'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})