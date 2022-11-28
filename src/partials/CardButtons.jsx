import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardButtons = ({ deleteBtn, id }) => {
  return (
    <div className="w-100 h-100 row m-0 align-items-end justify-content-evenly">
      <div className="col-sm-6">
      <Link
        className="my-2 btn btn-outline-primary d-flex align-items-center justify-content-center"
        to={`/updateCard/${id}`}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        Update
      </Link>
      </div>
      <div className="col-sm-6">
      <Link className=" my-2 btn btn-outline-danger d-flex align-items-center justify-content-center" onClick={deleteBtn} to="">
        <FontAwesomeIcon icon={faTrashCan} />
        Delete
      </Link>
      </div>
    </div>
  );
};

export default CardButtons;
