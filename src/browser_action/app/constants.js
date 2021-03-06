// action types
export const ADD_TODO = "ADD_TODO";
export const ACTUAL_ADD_TODO = "ACTUAL_ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DUPLICATE_TODO = "DUPLICATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD";
export const FILTER_BY_STATUS = "FILTER_BY_STATUS";
export const CLEAR_FILTER_BY_STATUS = "CLEAR_FILTER_BY_STATUS";
export const CLEAR_FILTER_BY_KEYWORD = "CLEAR_FILTER_BY_KEYWORD";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const ACTUAL_CLEAR_COMPLETED_TODOS = "ACTUAL_CLEAR_COMPLETED_TODOS";
export const TOGGLE_COMPLETE_ALL_TODOS = "TOGGLE_COMPLETE_ALL_TODOS";
export const ACTUAL_TOGGLE_COMPLETE_ALL_TODOS =
  "ACTUAL_TOGGLE_COMPLETE_ALL_TODOS";
// filters
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_COMPLETED = "FILTER_COMPLETED";
export const FILTER_ACTIVE = "FILTER_ACTIVE";

export const undoRedoActions = [
  ACTUAL_ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  DUPLICATE_TODO,
  ACTUAL_CLEAR_COMPLETED_TODOS
];
