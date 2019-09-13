import React from 'react';

export default props => (
  <form onSubmit={props.handleNewToDoSubmit}>
    <input
      type="text"
      autoFocus
      className="new-todo"
      onChange={props.handleNewToDoChange}
      placeholder="What needs to be done?"
      value={props.currentTodo}
    />
  </form>
);
