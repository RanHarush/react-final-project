import CardButtons from "partials/CardButtons";
import React from "react";

const Card = ({
  title,
  subTitle,
  description,
  address,
  phone,
  url,
  alt,
  onDelete,
  id,
}) => {
  const handleDeleteBtn = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="card mb-3 h-100" id={id}>
        <h3 className="card-header">{title}</h3>
        <div className="card-body">
          <h5 className="card-title">{subTitle}</h5>
        </div>
        <div className="w-100">
        <img src={url} alt={alt} className="w-100" style={{"aspectRatio":1/1, "objectFit": "contain"}} />
        </div>
        <div className="card-body flex-grow-1">
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Address:</b> {address}
          </li>
          <li className="list-group-item">
            <b>Phone:</b> {phone}
          </li>
        </ul>
        <div className="card-body py-0">
          {onDelete ? (
            <CardButtons deleteBtn={handleDeleteBtn} id={id} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
