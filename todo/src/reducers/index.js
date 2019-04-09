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
  console.log(action.payload);
  console.log(action);
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
      const newState = arr => {
        let newArr = arr.slice();
        let ind = 0;
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i] === action.payload.id) {
            return (ind = i);
          } else {
            continue;
          }
        }
        return arr.splice(ind, 0, action.payload);
      };
      console.log(newState(state.todoItems));
      return {
        todoItems: [...state.todoItems, action.payload]
      };
    case CLEAR_COMPLETED:
      const filteredState = state.todoItems.filter(todo => {
        return todo.completed === true;
      });
      return {
        todoItems: [...filteredState]
      };
    default:
      return state;
  }
};
export default reducer;
