import { wrapStore, alias } from "react-chrome-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import _throttle from "lodash/throttle";
import {
  rootReducer,
  ACTUAL_ADD_TODO,
  clearFilterByStatusTodos,
  clearFilterByKeywordTodos,
  portName
} from "../browser_action/app";
import { loadState, storeState } from "./storage";

const aliases = {
  ADD_TODO: action => dispatch => {
    dispatch(clearFilterByKeywordTodos());
    dispatch(clearFilterByStatusTodos());
    return dispatch({
      type: ACTUAL_ADD_TODO,
      id: action.id
    });
  }
};

const middleware = [alias(aliases), thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store;
loadState("todoList")
  .then(todoList => {
    store = createStore(
      rootReducer,
      { todoList },
      composeEnhancers(applyMiddleware(...middleware))
    );
    store.subscribe(
      _throttle(
        () =>
          storeState("todoList", store.getState().todoList)
            .then(msg => console.log(msg))
            .catch(err => console.error(err)),
        1000
      )
    );
    wrapStore(store, {
      portName
    });
  })
  .catch(err => {
    console.error(err);
  });
