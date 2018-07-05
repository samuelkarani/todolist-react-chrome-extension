import React from "react";
import PropTypes from "prop-types";

const Search = ({
  handleFilterByKeyword,
  handleClearFilterByKeyword,
  keyword
}) => {
  return (
    <form
      className="uk-search uk-search-default"
      onSubmit={e => e.preventDefault()}
    >
      <span uk-search-icon="" />
      <input
        className="uk-search-input uk-form-small uk-form-width-medium"
        type="search"
        placeholder="Filter by keyword..."
        onChange={e => handleFilterByKeyword(e.target.value.toLowerCase())}
        value={keyword}
      />
      {keyword && (
        <button
          className="uk-form-icon uk-form-icon-flip"
          uk-icon="icon: close"
          onClick={handleClearFilterByKeyword}
        />
      )}
    </form>
  );
};

Search.propTypes = {
  handleFilterByKeyword: PropTypes.func.isRequired,
  handleClearFilterByKeyword: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired
};

export default Search;
