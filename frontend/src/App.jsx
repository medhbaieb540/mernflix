import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'




function App() {
  const  [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/movies')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (<div className="App">
      <h1>Mernflix</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.name} className="movie-poster"  />
            <h2 className="movie-name">{movie.name}</h2>
            <p className="movie-description">{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App
