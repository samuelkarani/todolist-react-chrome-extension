import {
  ADD_TODO,
  UPDATE_TODO,
  DUPLICATE_TODO,
  REMOVE_TODO,
  FILTER_BY_KEYWORD,
  FILTER_BY_STATUS,
  CLEAR_FILTER_BY_STATUS,
  CLEAR_FILTER_BY_KEYWORD,
  CLEAR_COMPLETED_TODOS,
  TOGGLE_COMPLETE_ALL_TODOS
} from "../constants";

export const addTodo = id => ({
  type: ADD_TODO,
  id
});

export const updateTodo = ({ completed, title, id }) => ({
  type: UPDATE_TODO,
  updates: { completed, title, id }
});

export const duplicateTodo = ({ sourceId, targetId }) => ({
  type: DUPLICATE_TODO,
  sourceId,
  targetId
});

export const removeTodo = id => ({ type: REMOVE_TODO, id });

export const filterByKeyword = keyword => ({
  type: FILTER_BY_KEYWORD,
  keyword
});

export const filterByStatus = status => ({
  type: FILTER_BY_STATUS,
  status
});

export const clearFilterByStatusTodos = () => ({
  type: CLEAR_FILTER_BY_STATUS
});
export const clearFilterByKeywordTodos = () => ({
  type: CLEAR_FILTER_BY_KEYWORD
});

export const clearCompletedTodos = () => ({
  type: CLEAR_COMPLETED_TODOS
});

export const toggleCompleteAllTodos = allCompleted => ({
  type: TOGGLE_COMPLETE_ALL_TODOS,
  allCompleted
});
