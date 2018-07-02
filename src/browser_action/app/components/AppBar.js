import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";

const AppBar = ({
  handleClearCompleted,
  handleAdd,
  handleFilterByKeyword,
  handleClearFilterByKeyword,
  keyword,
  isClearCompletedActive
}) => (
  <div className="uk-flex uk-flex-middle uk-flex-between">
    <div className="uk-grid uk-grid-small uk-flex-middle">
      <div>
        <button
          className="uk-icon-button"
          uk-icon="plus"
          onClick={handleAdd}
          style={{
            backgroundColor: "#ee395b",
            color: "#fff"
          }}
        />
      </div>

      <div className="uk-visible@m">
        <span className="uk-text-meta uk-text-uppercase">add</span>
      </div>
    </div>
    <div>
      <Search
        handleFilterByKeyword={handleFilterByKeyword}
        handleClearFilterByKeyword={handleClearFilterByKeyword}
        keyword={keyword}
      />
    </div>
    <div>
      <button
        onClick={handleClearCompleted}
        className="uk-icon-link uk-margin-small-right uk-hidden@m"
        uk-icon="ban"
        disabled={isClearCompletedActive}
        uk-tooltip="title: Clear Completed; pos: left"
      />
      <button
        className="uk-button uk-button-small uk-button-default uk-visible@m"
        onClick={handleClearCompleted}
        disabled={isClearCompletedActive}
      >
        clear completed
      </button>
    </div>
  </div>
);

AppBar.propTypes = {
  handleClearCompleted: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleFilterByKeyword: PropTypes.func.isRequired,
  handleClearFilterByKeyword: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  isClearCompletedActive: PropTypes.bool.isRequired
};

export default AppBar;
