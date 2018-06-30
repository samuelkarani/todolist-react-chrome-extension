import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import TodoClass from "../classes/todo";

export const TodoList = ({
  todoList,
  selectId,
  handleUpdate,
  handleDuplicate,
  handleRemove
}) => (
  <div>
    <ul className="uk-list uk-list-divider">
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          isNew={selectId === todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleUpdate={handleUpdate}
          handleRemove={handleRemove}
          handleDuplicate={handleDuplicate}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  selectId: PropTypes.string,
  todoList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(TodoClass)])
      .isRequired
  ).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDuplicate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default TodoList;
