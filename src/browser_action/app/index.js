import rootReducer from "./reducers";
import AppContainer from "./containers/AppContainer";
import {
  ADD_TODO,
  ACTUAL_ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  ACTUAL_CLEAR_COMPLETED_TODOS,
  TOGGLE_COMPLETE_ALL_TODOS,
  ACTUAL_TOGGLE_COMPLETE_ALL_TODOS
} from "../app/constants";
import {
  clearFilterByKeywordTodos,
  clearFilterByStatusTodos
} from "../app/actions";
import { addTodo } from "../app/actions";
import { ID } from "../app/utils";
import { getTodos, getIncompleteTodosCount } from "./selectors";

const portName = "todoList";

export {
  rootReducer,
  AppContainer,
  ADD_TODO,
  ACTUAL_ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  ACTUAL_CLEAR_COMPLETED_TODOS,
  TOGGLE_COMPLETE_ALL_TODOS,
  ACTUAL_TOGGLE_COMPLETE_ALL_TODOS,
  clearFilterByKeywordTodos,
  clearFilterByStatusTodos,
  portName,
  addTodo,
  ID,
  getTodos,
  getIncompleteTodosCount
};
