var Add = ({onAddChange, onAddSubmit}) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" id='addInput' type="text" placeholder='Add Movie' onChange={(event) => onAddChange(event)}/>
      <button className="addBtn" onClick={(event) => onAddSubmit(event)}>Add</button>
    </div> 
  );
}
export default Add;
