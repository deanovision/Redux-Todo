import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, completedTodo, clearCompleted } from "./actions";
import "./App.css";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList
          completedTodo={this.props.completedTodo}
          todoItems={this.props.todoItems}
        />
        <AddTodo
          clearCompleted={this.props.clearCompleted}
          addTodo={this.props.addTodo}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoItems: state.todoItems
  };
};

export default connect(
  mapStateToProps,
  { addTodo, completedTodo, clearCompleted }
)(App);
