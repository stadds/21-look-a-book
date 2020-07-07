import React from "react";

function ResultCard({
  title,
  description,
  authors,
  image,
  link,
  rightBtnLabel,
  rightBtnClick,
  disabled,
}) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="d-flex">
          <h3 className="card-title flex-grow-1">{title}</h3>
          <a className="btn btn-info mx-2" target="_blank" rel="noopener noreferrer" href={link}>
            View
          </a>
          <button className="btn btn-success" disabled={disabled} onClick={rightBtnClick}>
            {rightBtnLabel}
          </button>
        </div>
        <p className="text-muted">Author(s):{authors}</p>
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
