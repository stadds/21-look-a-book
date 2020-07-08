import React from "react";
import "./style.css"

function SearchForm({
  label,
  name,
  placeholder,
  disabled,
  handleInputChange,
  handleFormSubmit,
  btnLabel,
}) {
  return (
    <div className="clearfix">
      <form>
        <div className="form-group">
          <label htmlFor="bookInput">{label}</label>
          <input
            className="form-control mb-2"
            id="bookInput"
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={handleInputChange}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-search float-right"
          onClick={handleFormSubmit}
          disabled={disabled}
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
