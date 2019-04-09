import { ADD_TODO_ITEM, COMPLETED_TODO, CLEAR_COMPLETED } from "../actions";

const initialState = {
  todoItems: [
    {
      task: "Sample Todo 1",
      id: 1,
      completed: false
    },
    {
      task: "Sample Todo 2",
      id: 2,
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        todoItems: [
          ...state.todoItems,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case COMPLETED_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todoItems: state.todoItems.filter(todo => {
          return todo.completed === false;
        })
      };
    default:
      return state;
  }
};
export default reducer;
