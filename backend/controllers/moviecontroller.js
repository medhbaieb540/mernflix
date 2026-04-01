const movies = [
  {
    id: 1,
    name: 'Forrest Gump',
    poster: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    trailer: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
    categories: ['Drama', 'Romance'],
    description: 'The story of Forrest Gump, a kind-hearted man from Alabama who unwittingly influences several defining historical events in 20th-century America.'
  },
  {
    id: 2,
    name: 'Fight Club',
    poster: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
    categories: ['Drama', 'Thriller'],
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more sinister.'
  },
  {
    id: 3,
    name: 'Inception',
    poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    categories: ['Sci-Fi', 'Thriller', 'Action'],
    description: 'A skilled thief who enters people\'s dreams to steal secrets is given the inverse task of planting an idea into a target\'s subconscious.'
  },
  {
    id: 4,
    name: 'The Matrix',
    poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    categories: ['Sci-Fi', 'Action'],
    description: 'A computer hacker discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free from it.'
  },
  {
    id: 5,
    name: 'Goodfellas',
    poster: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    trailer: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y',
    categories: ['Crime', 'Drama'],
    description: 'The story of Henry Hill and his life in the mob, covering his rise and fall as a gangster spanning several decades in New York.'
  },
  {
    id: 6,
    name: 'The Silence of the Lambs',
    poster: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    trailer: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
    categories: ['Crime', 'Thriller', 'Horror'],
    description: 'A young FBI cadet seeks the help of an imprisoned cannibal killer to catch another serial killer known as Buffalo Bill.'
  },
  {
    id: 7,
    name: 'Interstellar',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    categories: ['Sci-Fi', 'Drama'],
    description: 'A team of astronauts travels through a wormhole near Saturn in search of a new home for humanity as Earth faces environmental collapse.'
  },
  {
    id: 8,
    name: 'Se7en',
    poster: 'https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg',
    trailer: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
    categories: ['Crime', 'Thriller', 'Horror'],
    description: 'Two detectives hunt a mysterious serial killer who uses the seven deadly sins as the motives in a series of gruesome murders.'
  },
  {
    id: 9,
    name: 'Gladiator',
    poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    trailer: 'https://www.youtube.com/watch?v=owK1qxDselE',
    categories: ['Action', 'Drama', 'Adventure'],
    description: 'A betrayed Roman general is reduced to slavery and becomes a gladiator, rising through the ranks to seek vengeance against the emperor who destroyed his family.'
  },
  {
    id: 10,
    name: 'The Departed',
    poster: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    trailer: 'https://www.youtube.com/watch?v=iojhkTRYBEQ',
    categories: ['Crime', 'Thriller', 'Drama'],
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.'
  },
  {
    id: 11,
    name: 'Back to the Future',
    poster: 'https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg',
    trailer: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
    categories: ['Sci-Fi', 'Adventure', 'Comedy'],
    description: 'A teenager is accidentally sent back to 1955 in a time-traveling DeLorean and must ensure his parents fall in love to get back to the future.'
  },
  {
    id: 12,
    name: 'Star Wars: A New Hope',
    poster: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA',
    categories: ['Sci-Fi', 'Action', 'Adventure'],
    description: 'A young farm boy joins a ragtag group of rebels to rescue a princess and battle an evil galactic empire with the help of a mystical force.'
  },
  {
    id: 13,
    name: '12 Angry Men',
    poster: 'https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
    trailer: 'https://www.youtube.com/watch?v=Cxm0ZGpYpKQ',
    categories: ['Drama', 'Crime'],
    description: 'Twelve jurors must unanimously decide the fate of a teenager accused of murder, but one holdout juror forces them all to reconsider the evidence.'
  },
  {
    id: 14,
    name: 'Spirited Away',
    poster: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    trailer: 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
    categories: ['Animation', 'Adventure', 'Fantasy'],
    description: 'A young girl stumbles into a magical spirit world and must work in a bathhouse to free herself and her parents who have been turned into pigs.'
  },
]
const getmovies = (req, res) => {
  res.json(movies)
};
const welcome = (req, res) => {
  res.send('<h1>Welcome to Mernflix API</h1>')
};
const getmoviesid = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
};
module.exports = { getmovies, welcome, getmoviesid };
