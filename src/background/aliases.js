import {
  ACTUAL_ADD_TODO,
  clearFilterByStatusTodos,
  clearFilterByKeywordTodos
} from "../browser_action/app";

const aliases = {
  ADD_TODO: action => dispatch => {
    dispatch(clearFilterByKeywordTodos());
    dispatch(clearFilterByStatusTodos());
    return dispatch({
      type: ACTUAL_ADD_TODO,
      id: action.id,
      title: action.title
    });
  }
};

export default aliases;
