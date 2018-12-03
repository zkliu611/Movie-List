var MovieListEntry = ({movie}) => {
  return (
    <div className="movie-list-entry">
      <div className="movie-name">{movie.title}</div>
    </div>
  );
}

export default MovieListEntry;
