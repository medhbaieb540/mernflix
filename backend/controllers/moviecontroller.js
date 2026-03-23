movies= [{id: 1 , name : 'The Shawshank Redemption',
  poster: "https://example.com/poster1.jpg"},
  {id: 2 , name : 'The Godfather',poster: "https://example.com/poster2.jpg"},
  {id: 3 , name : 'The Dark Knight',poster: "https://example.com/poster3.jpg"},
  {id: 4 , name : 'Pulp Fiction',poster: "https://example.com/poster4.jpg"},
  {id: 5 , name : 'The Lord of the Rings: The Return of the King',poster: "https://example.com/poster5.jpg"}]
const getmovies = (req, res) => {
  res.json(movies)
};
const welcome = (req, res) => {
  res.send('<h1>Welcome to Mernflix API</h1>')
};
module.exports = { getmovies, welcome };
