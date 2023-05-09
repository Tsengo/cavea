import React from 'react';


const ListItem = ({ task, handleDelete }) => {

  return (
    <tr key={task.id}>
      <td>{task.product_name}</td>
      <td>{task.product_location}</td>
      <td>{task.product_price}</td>
      <td><button onClick={() => handleDelete(task.id)}>DELETE</button></td>
    </tr>
  );
};

export default ListItem;
