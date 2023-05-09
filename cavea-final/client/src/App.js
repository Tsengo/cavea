import React, { Fragment, useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/Listitem';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos?page=${page}&limit=20`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/todos/${id}`, {
        method: 'DELETE',
      });
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <ListHeader listName={'Products'}/>
      <table className='list-item'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Fragment key={task.id}>
              <ListItem task={task} handleDelete={handleDelete}/>
            </Fragment>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={previousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <button onClick={() => setPage(1)}>1</button>
    </div>
  );
};

export default App;

