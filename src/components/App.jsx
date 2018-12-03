import MovieList from './MovieList.js';
import movies from '../data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <div>
            <MovieList movies={movies}/>
        </div>
      </div>
    );
  } 
}

export default App;