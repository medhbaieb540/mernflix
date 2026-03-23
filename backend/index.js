const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('<h1>mernflix  </h1>')
})
movies= [{id: 1 , name : 'The Shawshank Redemption',
  poster: "https://example.com/poster1.jpg"},
  {id: 2 , name : 'The Godfather',poster: "https://example.com/poster2.jpg"},
  {id: 3 , name : 'The Dark Knight',poster: "https://example.com/poster3.jpg"},
  {id: 4 , name : 'Pulp Fiction',poster: "https://example.com/poster4.jpg"},
  {id: 5 , name : 'The Lord of the Rings: The Return of the King',poster: "https://example.com/poster5.jpg"}]

app.get('/api/movies', (req, res) => {
  res.json(movies)
})

app.listen(port, () => {
  console.log(`Server is running → http://localhost:${port}`)
})