import { createSelector } from "reselect";
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from "../constants";

const getStatusFilter = state => state.status;

const getKeywordFilter = state => state.keyword;

export const getTodos = state => state.todoList.present;

const filterByKeyword = (todoList, keyword) =>
  todoList.filter(todo => todo.title.includes(keyword));

function filterByStatus(todoList, status) {
  switch (status) {
    case FILTER_ACTIVE:
      return todoList.filter(todo => todo.completed === false);

    case FILTER_COMPLETED:
      return todoList.filter(todo => todo.completed === true);

    case FILTER_ALL:
      return todoList;

    default:
      return todoList;
  }
}

export const getIncompleteTodosCount = createSelector(getTodos, todoList =>
  todoList.reduce((prev, todo) => prev + (!todo.completed ? 1 : 0), 0)
);

export const getTodosFiltered = createSelector(
  getTodos,
  getStatusFilter,
  getKeywordFilter,
  (todoList, status, keyword) =>
    filterByKeyword(filterByStatus(todoList, status), keyword)
);
