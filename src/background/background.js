import { wrapStore, alias } from "react-chrome-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {
  rootReducer,
  ACTUAL_ADD_TODO,
  clearFilterByStatusTodos,
  clearFilterByKeywordTodos,
  portName
} from "../browser_action/app";

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

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

wrapStore(store, {
  portName
});
