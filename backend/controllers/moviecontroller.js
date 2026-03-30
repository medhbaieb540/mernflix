movies= [{id: 1 , name : 'The Shawshank Redemption',poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg" , trailer : "https://www.youtube.com/watch?v=6hB3S9bIaco"},
  {id: 2 , name : 'The Godfather',poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" , trailer : "https://www.youtube.com/watch?v=sY1S34973zA"},
  {id: 3 , name : 'The Dark Knight',poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" , trailer : "https://www.youtube.com/watch?v=EXeTwQWrcwY"},
  {id: 4 , name : 'Pulp Fiction',poster: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg" , trailer : "https://www.youtube.com/watch?v=s7EdQKEWCz8"},
  {id: 5 , name : 'The Lord of the Rings: The Return of the King',poster: "https://m.media-amazon.com/images/I/A16Y9ujrw3L.jpg" , trailer : "https://www.youtube.com/watch?v=kJQTP1K2c90"}]
const getmovies = (req, res) => {
  res.json(movies)
};
const welcome = (req, res) => {
  res.send('<h1>Welcome to Mernflix API</h1>')
};
const getmoviesid = (req, res) => {
  const id = parseInt(req.params.id);
};
module.exports = { getmovies, welcome, getmoviesid };
