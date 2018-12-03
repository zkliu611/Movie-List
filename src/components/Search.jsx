var Search = ({onChange, onSubmit}) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" placeholder='Search' onChange={(event) => onChange(event)}/>
      <button className="searchBtn" onClick={(event) => onSubmit(event)}>Go!</button>
    </div> 
  );
}
export default Search;
