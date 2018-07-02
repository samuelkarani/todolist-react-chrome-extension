import React from "react";
import PropTypes from "prop-types";

const UndoRedo = ({
  canUndo,
  canRedo,
  handleUndo,
  handleRedo,
  handleClearHistory,
  canClearHistory
}) => {
  return (
    <div className="uk-button-group uk-flex uk-flex-right">
      <button
        className="uk-button uk-button-default uk-icon-link"
        uk-icon="close"
        uk-tooltip="title: clear history; pos: left"
        onClick={handleClearHistory}
        disabled={!canClearHistory}
      />
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
  canClearHistory: PropTypes.bool.isRequired,
  handleUndo: PropTypes.func.isRequired,
  handleRedo: PropTypes.func.isRequired,
  handleClearHistory: PropTypes.func.isRequired
};

export default UndoRedo;
