import React from 'react';

export default props => (
  <form>
    <input
      type="text"
      autoFocus
      className="new-todo"
      onChange={props.handleNewTodoChange}
      placeholder="What needs to be done?"
      // value={props.currentTodo}
    />
  </form>
);
