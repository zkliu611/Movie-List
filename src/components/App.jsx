import MovieList from './MovieList.js';
import movies from '../data/data.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      Movies: movies
    }
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmit(event) {
    var input = String(this.state.search)
    var newMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.includes(input)) {
        newMovies.push(movies[i])
      }
    }
    if (newMovies.length > 0){
      this.setState({
        Movies: newMovies
      })
    } else {
       this.setState({
        Movies: [{'title': 'Sorry, no result found'}]
      })     
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} />
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