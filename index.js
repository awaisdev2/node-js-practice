require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.get('/login', (_, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})