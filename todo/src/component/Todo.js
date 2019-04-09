import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.todoItem.task,
      id: this.props.todoItem.id,
      completed: this.props.todoItem.completed
    };
  }
  toggleCompletedTask = () => {
    // this.setState({
    //   completed: !this.state.completed
    // });
    this.props.completedTodo(this.state);
  };
  render() {
    const completed = {
      textDecoration: "line-through"
    };
    return (
      <div
        onClick={this.toggleCompletedTask}
        style={this.state.completed ? completed : null}
      >
        <p>{this.state.task}</p>
      </div>
    );
  }
}

export default Todo;
