import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import { getIncompleteTodosCount, getTodosFiltered } from "../selectors";
import App from "../components/App";
// uikit
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);
window.UIkit = UIkit;

const areAllTodosCompleted = todoList =>
  todoList.every(todo => todo.completed === true);

const mapStateToProps = state => ({
  filteredTodoList: getTodosFiltered(state),
  todoListCount: state.todoList.present.length,
  keyword: state.keyword,
  status: state.status,
  allCompleted: areAllTodosCompleted(state.todoList.present),
  incompleteCount: getIncompleteTodosCount(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
