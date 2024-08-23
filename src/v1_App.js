import logo from './logo.svg';
import './App.css';
import './styles.css';
import {Header} from './components/Header';
import { MoviesGrid } from './components/MoviesGrid';

function App() {
  return (
    <div className="App">

      <div className="container">
        <Header></Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <footer className="footer">
        <p className="footer">Footer content here</p>
      </footer>
    </div>
  );
}

export default App;
