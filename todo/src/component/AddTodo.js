import React from "react";

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChanges}
          type="text"
          value={this.state.task}
          placeholder=" Add Todo Item..."
          name="task"
        />
        <button onClick={this.handleSubmit}>Add Todo Item</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}
export default AddTodo;
