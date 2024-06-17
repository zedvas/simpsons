import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li
        className={todo.completed ? "completed" : "incomplete"}
        // onClick={() => this.onToggle(todo.title)}
      >
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
