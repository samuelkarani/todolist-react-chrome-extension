import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles/app.css";
import TodoClass from "../classes/todo";
import TodoList from "./TodoList";
import AppBar from "./AppBar";
import Header from "./Header";
import UndoRedoContainer from "../containers/UndoRedoContainer";
import { ID } from "../utils";
class App extends PureComponent {
  state = {
    selectId: null
  };

  handleAdd = () => {
    const id = ID();

    this.props.actions.addTodo(id);
    this.setState({ selectId: id });
  };

  handleDuplicate = sourceId => {
    const targetId = ID();
    this.props.actions.duplicateTodo({ sourceId, targetId });
    this.setState({ selectId: targetId });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectId === this.state.selectId) {
      this.setState({
        selectId: null
      });
    }
  }

  render() {
    const {
      allCompleted,
      keyword,
      status,
      filteredTodoList,
      incompleteCount,
      todoListCount,
      actions
    } = this.props;

    const { selectId } = this.state;

    return (
      <div>
        <div className="uk-section uk-section-xsmall">
          <div className="uk-container">
            <AppBar
              keyword={keyword}
              handleAdd={this.handleAdd}
              handleClearCompleted={actions.clearCompletedTodos}
              handleFilterByKeyword={actions.filterByKeyword}
              handleClearFilterByKeyword={actions.clearFilterByKeywordTodos}
              isClearCompletedActive={todoListCount === 0}
            />
            <hr />
            <div className="uk-grid">
              {todoListCount > 0 && (
                <div className="uk-width-expand">
                  <Header
                    allCompleted={allCompleted}
                    handleToggleCompleteAll={actions.toggleCompleteAllTodos}
                    handleFilterByStatus={actions.filterByStatus}
                    incompleteCount={incompleteCount}
                    status={status}
                  />
                  <hr />
                  <TodoList
                    todoList={filteredTodoList}
                    handleUpdate={actions.updateTodo}
                    handleRemove={actions.removeTodo}
                    handleDuplicate={this.handleDuplicate}
                    selectId={selectId}
                  />
                </div>
              )}
            </div>

            <div>
              <UndoRedoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  allCompleted: PropTypes.bool.isRequired,
  keyword: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  filteredTodoList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(TodoClass)])
      .isRequired
  ).isRequired,
  todoListCount: PropTypes.number.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default App;
