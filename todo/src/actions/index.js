export const ADD_TODO_ITEM = "ADD_TODO_ITEM";

export const addTodo = task => {
  return {
    type: ADD_TODO_ITEM,
    payload: task
  };
};

export const COMPLETED_TODO = "COMPLETED_TODO";

export const completedTodo = todo => {
  return {
    type: COMPLETED_TODO,
    payload: { ...todo, completed: !todo.completed }
  };
};

export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  };
};
