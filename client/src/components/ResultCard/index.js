import React from "react";
import "./style.css"

function ResultCard({
  title,
  description,
  headClass,
  authors,
  image,
  link,
  rightBtnLabel,
  rightBtnClick,
  rBtnClass,
  disabled,
}) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="d-flex">
          <h3 className="card-title flex-grow-1">{title}</h3>
          <a className="btn btn-view mx-2" target="_blank" rel="noopener noreferrer" href={link}>
            View
          </a>
          <button className="btn btn-one" disabled={disabled} onClick={rightBtnClick}>
            {rightBtnLabel}
          </button>
        </div>
        <p className="">Author(s):{authors}</p>
      </div>
      <div className="row no-gutters mb-2">
        <div className="col-md-4">
          <img src={image} className="card-img" alt={`${title} book cover`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
