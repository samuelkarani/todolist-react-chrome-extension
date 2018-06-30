import React from "react";
import PropTypes from "prop-types";

const UndoRedo = ({ canUndo, canRedo, handleUndo, handleRedo }) => {
  return (
    <div className="uk-button-group uk-flex uk-flex-right">
      <button
        className="uk-button uk-button-default"
        onClick={handleUndo}
        disabled={!canUndo}
      >
        undo
      </button>
      <button
        className="uk-button uk-button-default"
        onClick={handleRedo}
        disabled={!canRedo}
      >
        redo
      </button>
    </div>
  );
};

UndoRedo.propTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  handleUndo: PropTypes.func.isRequired,
  handleRedo: PropTypes.func.isRequired
};

export default UndoRedo;
