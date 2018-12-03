import MovieList from './MovieList.js';
import movies from '../data/data.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      Movies: [],
      addMovie: null
    }
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSearchSubmit(event) {
    var input = String(this.state.search)
    var newMovies = [];
    var movies = this.state.Movies;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.includes(input)) {
        newMovies.push(movies[i]);
      }
    }
    if (newMovies.length > 0){
      this.setState({
        Movies: newMovies
      })
    } else {
       this.setState({
        Movies: [{'title': 'Sorry, no result found'}]
      });    
    }
    $('#searchInput').val('');
    
  }

  handleAddChange(event) {
    this.setState({
      addMovie: event.target.value
    });
  }

  handleAddSumbit(event) {
    var newMovie = {'title': this.state.addMovie};
    var movies = this.state.Movies
    movies.push(newMovie);
    this.setState({
        Movies: movies
    });
    $('#addInput').val('');
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>

        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Add onAddChange={this.handleAddChange.bind(this)} onAddSubmit={this.handleAddSumbit.bind(this)}/>
          </div>
        </nav>

        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChange={this.handleSearchChange.bind(this)} onSubmit={this.handleSearchSubmit.bind(this)} />
          </div>
        </nav>

        <div>
            <MovieList movies={this.state.Movies} />
        </div>
      </div>
    );
  } 
}

export default App;