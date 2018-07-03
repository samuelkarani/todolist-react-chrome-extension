import {
  ACTUAL_ADD_TODO,
  ACTUAL_CLEAR_COMPLETED_TODOS,
  ACTUAL_TOGGLE_COMPLETE_ALL_TODOS,
  clearFilterByStatusTodos,
  clearFilterByKeywordTodos
} from "../browser_action/app";

function dispatchFilters(dispatch) {
  dispatch(clearFilterByKeywordTodos());
  dispatch(clearFilterByStatusTodos());
}

const aliases = {
  ADD_TODO: action => dispatch => {
    dispatchFilters(dispatch);
    return dispatch({
      type: ACTUAL_ADD_TODO,
      id: action.id,
      title: action.title
    });
  },
  CLEAR_COMPLETED_TODOS: action => dispatch => {
    dispatchFilters(dispatch);
    return dispatch({
      type: ACTUAL_CLEAR_COMPLETED_TODOS
    });
  },
  TOGGLE_COMPLETE_ALL_TODOS: action => dispatch => {
    dispatchFilters(dispatch);
    return dispatch({
      type: ACTUAL_TOGGLE_COMPLETE_ALL_TODOS,
      allCompleted: action.allCompleted
    });
  }
};

export default aliases;
