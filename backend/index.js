const express = require('express')
const app = express()
const port = 3000
console.log('Hello world  ')

app.get('/', (req, res) => {
  res.send('<h1>Hello world  </h1>')
})

app.listen(port, () => {
  console.log(`Server is running → http://localhost:${port}`)
})