import logo from './logo.svg';
import './App.css';
import './styles.css';
import {Header} from './components/Header';
import { MoviesGrid } from './components/MoviesGrid';
import { Watchlist } from './components/Watchlist';
/* Router */
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function App() {

  /* Movies state */
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  /* initial the state */
  /* setMovies will set the length of the movies
  const [movies, setMovies] = useState([]);
  /* useEffect [] only once */
  useEffect(() => {
    /* The Public folder does not have to be specified here. */
    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))
    }, []);

  /* Toggle watchlist: Add a movie to the watchlist. */
  /* The prev will check the previous state of the movie. */
  /* If it is already in watchlist, remove the id from the watchlist. */
  /* If not, add the movie to the watchlist. */
  /* Filter the list and remove the id that has been there */
  /* previously (toggle). */
  /* The id is a new id, add it to the previous array. */
  function toggleWatchlist(movieId) {
    setWatchlist(
      (prev) => {
        const boo_watchlist = prev.includes(movieId)  
          ? prev.filter(id => id !== movieId) 
          : [...prev, movieId]
        return boo_watchlist;
      });
  }
  // Working version from the video
  const toggleWatchlist_1 = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter(id => id!==movieId)
        : [...prev, movieId]
    );
  }

  return (
    <div className="App">

      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid 
              movies={movies} 
              watchlist={watchlist} 
              toggleWatchlist={toggleWatchlist} />}>
            </Route>
            <Route path="/watchlist" element={<Watchlist 
              movies={movies} 
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist} />}>
            </Route>
          </Routes>
        </Router>
      </div>

      <footer className="footer">
        <p className="footer">Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
