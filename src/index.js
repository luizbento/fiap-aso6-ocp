const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/books', (req, res) => {
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})