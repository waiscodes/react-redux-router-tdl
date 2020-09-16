import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import toDosReducer from "./reducers/todos";
import { addNewToDo } from "./actions/todos";
import { Provider } from "react-redux";
import ToDos from "./components/ToDos";
import ToDoList from "./components/ToDoList";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * Redux Store
 * Store is our global state. This is where all of
 * our global data exists. We pass in the reducer
 * so it will know how to handle any actions (requests.)
 */
const store = createStore(
  toDosReducer,
  // If we want to use the Redux DevTools, add this argument as well!
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// We can run instructions every time the state/store is
// updated by using the store's "subscribe" method.
// It takes a function to execute as its argument, we are
// using it to console.log() our current state each time
// that it experiences a change.
store.subscribe(() => console.log(store.getState()));

/**
 * Redux Dispatch
 * This is what we use to send actions to our store's reducer.
 */
// Dispatch expects a properly formatted action...
// (otherwise your reducer won't know what to do!)
store.dispatch(addNewToDo("Research Redux"));
store.dispatch(addNewToDo("Review React"));

// When using Redux, we use the <Provider> component with...
// a "store" prop to pass our global state info down to...
// wheverever we need it (whichever component needs it.)
ReactDOM.render(
  <Provider store={store}>
    <h1>React-Redux To-Do List (TECHCareers)</h1>
    <Router>
      <Route path="/" component={ToDoList} />
      <Route path="form" component={ToDos} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
