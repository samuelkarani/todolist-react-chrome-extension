import rootReducer from "./reducers";
import AppContainer from "./containers/AppContainer";
import { ACTUAL_ADD_TODO, ADD_TODO } from "../app/constants";
import {
  clearFilterByKeywordTodos,
  clearFilterByStatusTodos
} from "../app/actions";

// app interface with browser components
const portName = "todoList";

export {
  rootReducer,
  AppContainer,
  ADD_TODO,
  ACTUAL_ADD_TODO,
  clearFilterByKeywordTodos,
  clearFilterByStatusTodos,
  portName
};
