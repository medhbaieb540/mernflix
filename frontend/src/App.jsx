import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MyList from './pages/Mylist';
import MovieDetail from './pages/MovieDetail';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mylist, setMylist] = useState(() => {
    const storedList = localStorage.getItem('mylist');
    return storedList ? JSON.parse(storedList) : [];
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/movies')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    localStorage.setItem('mylist', JSON.stringify(mylist));
  }, [mylist]);

  const toggleMyList = (movie) => {
    if (mylist.some(item => item.id === movie.id)) {
      setMylist(mylist.filter(item => item.id !== movie.id));
    } else {
      setMylist([...mylist, movie]);
    }
  };

  const isInMyList = (movieId) => mylist.some(item => item.id === movieId);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <h2 className="text-3xl">Loading MernFlix...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
   <Router>
      <div className="min-h-screen bg-[#141414] text-white">
        <nav className="bg-black/90 fixed w-full z-50 py-4 px-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-red-600">MernFlix</h1>
          <div className="flex gap-8 text-lg">
            <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            <NavLink to="/movies" className="hover:text-gray-300">Movies</NavLink>
            <NavLink to="/mylist" className="hover:text-gray-300">My List</NavLink>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} mylist={mylist} toggleMyList={toggleMyList} isInMyList={isInMyList} />}
          />
          <Route
            path="/movies"
            element={<Movies movies={movies} mylist={mylist} toggleMyList={toggleMyList} isInMyList={isInMyList} />}
          />
          <Route
            path="/mylist"
            element={<MyList mylist={mylist} toggleMyList={toggleMyList} isInMyList={isInMyList} />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail movies={movies} toggleMyList={toggleMyList} isInMyList={isInMyList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;