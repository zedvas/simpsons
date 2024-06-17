import React, { Component } from "react";
import TodoItem from "./components/TodoItem";

class App extends Component {
  state = {
    todos: [
      { title: "Clean car", completed: false },
      { title: "Buy car", completed: true },
      { title: "Buy bread", completed: false },
    ],
  };

  onInput = (e) => {
    this.setState({ todoText: e.target.value });
  };

  onClick = () => {
    const { todoText } = this.state;
    const todos = [...this.state.todos];

    //do nothing if no data
    if (!todoText) {
      return;
    }

    if (todos.includes(todoText)) {
      return;
    }

    todos.push({ title: this.state.todoText, completed: false });
    this.setState({ todos });
  };

  //   onDelete = (title) => {
  //     const todos = [...this.state.todos];

  //     const indexOf = todos.findIndex((todo) => {
  //       return todo.title === title;
  //     });
  //     todos.splice(indexOf, 1);

  //     this.setState({ todos });
  //   };

  //   onToggle = (title) => {
  //     const todos = [...this.state.todos];

  //     const indexOf = todos.findIndex((todo) => {
  //       return todo.title === title;
  //     });

  //     todos[indexOf].completed = !todos[indexOf].completed;
  //     this.setState({ todos });
  //   };

  render() {
    console.log(this.state);
    const { todos } = this.state;
    return (
      <>
        <input type="text" onInput={this.onInput} />
        <button onClick={this.onClick}>Add</button>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </>
    );
  }
}

export default App;
