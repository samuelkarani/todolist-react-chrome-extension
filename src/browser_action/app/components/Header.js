import React from "react";
import PropTypes from "prop-types";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "../constants";

const Header = ({
  allCompleted,
  handleToggleCompleteAll,
  handleFilterByStatus,
  incompleteCount,
  status
}) => {
  return (
    <div className="uk-grid uk-flex uk-flex-between uk-flex-middle">
      <div className="uk-grid uk-grid-small">
        <div>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={allCompleted}
            onChange={() => handleToggleCompleteAll(allCompleted)}
            uk-tooltip="title: toggle complete all; pos: right"
          />
        </div>
      </div>

      <ul className="uk-subnav uk-subnav-pill">
        <li
          onClick={() => handleFilterByStatus(FILTER_ALL)}
          className={status === FILTER_ALL ? "uk-active" : ""}
        >
          <a>All</a>
        </li>
        <li
          onClick={() => handleFilterByStatus(FILTER_ACTIVE)}
          className={status === FILTER_ACTIVE ? "uk-active" : ""}
        >
          <a>Active</a>
        </li>
        <li
          onClick={() => handleFilterByStatus(FILTER_COMPLETED)}
          className={status === FILTER_COMPLETED ? "uk-active" : ""}
        >
          <a>Completed</a>
        </li>
      </ul>

      <div className="uk-visible@m">
        <p className="uk-text-meta uk-text-small">{`
        ${incompleteCount} item${incompleteCount > 1 ? "s" : ""} left`}</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  status: PropTypes.string.isRequired,
  allCompleted: PropTypes.bool.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  handleFilterByStatus: PropTypes.func.isRequired,
  handleToggleCompleteAll: PropTypes.func.isRequired
};

export default Header;
