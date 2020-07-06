import React from "react";

function ResultCard({
  title,
  description,
  authors,
  image,
  link,
  rightBtn,
  rightBtnClick,
  disabled,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex">
          <h3 className="card-title flex-grow-1">{title}</h3>
          <a className="btn btn-info mx-2" target="_blank" href={link}>
            View
          </a>
          <button className="btn btn-success" disabled={disabled} onClick={rightBtnClick}>
            {rightBtn}
          </button>
        </div>
        <p className="text-muted">Author(s):{authors}</p>
      </div>
      <div class="row no-gutters mb-2">
        <div class="col-md-4">
          <img src={image} class="card-img" alt={`${title} book cover`} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
