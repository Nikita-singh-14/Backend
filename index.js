const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res) => {
    res.send('login here');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
