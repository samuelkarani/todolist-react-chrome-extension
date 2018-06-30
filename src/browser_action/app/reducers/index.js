import { combineReducers } from "redux";
import undoable, { includeAction } from "redux-undo";
import TodoClass from "../classes/todo";
import {
  ADD_TODO,
  UPDATE_TODO,
  DUPLICATE_TODO,
  REMOVE_TODO,
  FILTER_BY_STATUS,
  FILTER_BY_KEYWORD,
  CLEAR_FILTER_BY_KEYWORD,
  CLEAR_FILTER_BY_STATUS,
  CLEAR_COMPLETED_TODOS,
  TOGGLE_COMPLETE_ALL_TODOS,
  FILTER_ALL,
  undoRedoActions
} from "../constants";
import Todo from "../classes/todo";

function getTodoList(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [new TodoClass({ id: action.id }), ...state];

    case UPDATE_TODO:
      const { completed, title, id } = action.updates;
      return state.map(todo => {
        if (todo.id === id) {
          return new Todo({
            id,
            completed,
            title
          });
        }
        return todo;
      });

    case DUPLICATE_TODO:
      const { sourceId, targetId } = action;
      const idx = state.findIndex(todo => todo.id === sourceId);
      const todo = state[idx];
      const duplicatedTodo = new TodoClass({
        completed: todo.completed,
        title: todo.title,
        id: targetId
      });
      return [
        ...state.slice(0, idx + 1),
        duplicatedTodo,
        ...state.slice(idx + 1)
      ];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case CLEAR_COMPLETED_TODOS:
      return state.filter(todo => todo.completed !== true);

    case TOGGLE_COMPLETE_ALL_TODOS:
      return state.map(todo =>
        Object.assign(todo, {
          completed: !action.allCompleted
        })
      );

    default:
      return state;
  }
}

function filterByStatus(state = FILTER_ALL, action) {
  switch (action.type) {
    case FILTER_BY_STATUS:
      return action.status;

    case CLEAR_FILTER_BY_STATUS:
      return FILTER_ALL;

    default:
      return state;
  }
}

function filterByKeyword(state = "", action) {
  switch (action.type) {
    case FILTER_BY_KEYWORD:
      return action.keyword;

    case CLEAR_FILTER_BY_KEYWORD:
      return "";

    default:
      return state;
  }
}

export default combineReducers({
  todoList: undoable(getTodoList, {
    filter: includeAction(undoRedoActions)
  }),
  status: filterByStatus,
  keyword: filterByKeyword
});
