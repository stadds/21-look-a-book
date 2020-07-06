import React from "react";

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
    <form>
      <div className="form-group">
        <label for="bookInput">{label}</label>
        <input
          className="form-control"
          id="bookInput"
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ float: "right", marginBottom: 10 }}
          onClick={handleFormSubmit}
          disabled={disabled}
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
