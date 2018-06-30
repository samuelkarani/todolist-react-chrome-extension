import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import UndoRedo from "../components/UndoRedo";

const mapStateToProps = state => ({
  canUndo: state.todoList.past.length > 0,
  canRedo: state.todoList.future.length > 0
});

const mapDispatchToProps = {
  handleRedo: UndoActionCreators.redo,
  handleUndo: UndoActionCreators.undo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);
