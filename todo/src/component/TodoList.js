import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoItems.map(todo => (
        <Todo
          completedTodo={props.completedTodo}
          key={todo.id}
          todoItem={todo}
        />
      ))}
    </div>
  );
};
export default TodoList;
