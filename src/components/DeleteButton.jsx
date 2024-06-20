function Delete({ onDeleteHandler, id }) {
  return <button onClick={() => onDeleteHandler(id)}>delete</button>;
}

export default Delete;
