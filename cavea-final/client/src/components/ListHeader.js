const ListHeader = ({ listName }) => {
    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create">ADD NEW</button>
          {/* <a href="./" className="create">ADD NEW</a> */}
        </div>
      </div>
    )
  }
  
export default ListHeader;
  

  