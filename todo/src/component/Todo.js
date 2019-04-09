import React from "react";

const Todo = props => {
  const completed = {
    textDecoration: "line-through"
  };
  const toggleCompletedTask = () => {
    props.completedTodo(props.todoItem);
  };
  return (
    <div
      onClick={toggleCompletedTask}
      style={props.todoItem.completed ? completed : null}
    >
      <p>{props.todoItem.task}</p>
    </div>
  );
};
export default Todo;
