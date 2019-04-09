import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "./index.css";
import App from "./App";

// const reducer = () => {
//   return {
//     todoItems: [
//       {
//         task: "Sample Todo 1",
//         id: 1,
//         completed: false
//       },
//       {
//         task: "Sample Todo 2",
//         id: 2,
//         completed: false
//       }
//     ]
//   };
// };

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
