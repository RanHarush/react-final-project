import axios from "axios";
import AddCard from "components/AddCard";
import handleInputChange from "functions/inputChange";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";

const AddCardPage = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    title: "",
    subTitle: "",
    description: "",
    address: "",
    phone: "",
    url: "",
    alt: "",
  });

  const handleInput = (ev) => {
    handleInputChange(ev, setInput);
  };

  const handleAddCardClick = () => {
    axios
      .post("/cards/", input)
      .then(() => {
        toast.success("👍 Card Added Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/")
      })
      .catch((err) => {
        toast.error(`${err.response.data}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div
      className="row row-cols-1 d-flex flex-column align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <h1 className="d-flex justify-content-center mt-4 mb-5">Add Card Page</h1>
      <AddCard
        title={input.title}
        subTitle={input.subTitle}
        desc={input.description}
        address={input.address}
        phone={input.phone}
        img={input.url}
        alt={input.alt}
        onChange={handleInput}
      />
      <button
        className="btn btn-outline-primary col-4 col-md-2 mt-4"
        onClick={handleAddCardClick}
      >
        Add Card
      </button>
    </div>
  );
};

export default AddCardPage;
