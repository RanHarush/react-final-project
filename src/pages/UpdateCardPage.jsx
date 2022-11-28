import axios from "axios";
import AddCard from "components/AddCard";
import handleInputChange from "functions/inputChange";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";

function UpdateCardPage() {
  let { id } = useParams();
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

  // To get a business card of a specific business
  useEffect(() => {
    axios
      .get(`/cards/card/${id}`)
      .then((res) => {
        let data = res.data;
        setInput({
          title: data.title,
          subTitle: data.subTitle,
          description: data.description,
          address: data.address,
          phone: data.phone,
          url: data.image.url,
          alt: data.image.alt,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // To update a business card
  const handleUpdateCardClick = () => {
    axios
      .put(`/cards/${id}`, input)
      .then(() => {
        toast.success("👍 Card Updated", {
          position: "bottom-right",
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
          position: "bottom-right",
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
      className="row d-flex flex-column align-items-center"
      style={{ height: "85vh" }}
    >
      <h1 className="d-flex justify-content-center mt-4 mb-5">
        Update Card Page
      </h1>
      <AddCard
        title={input.title}
        subTitle={input.subTitle}
        desc={input.description}
        address={input.address}
        phone={input.phone}
        url={input.url}
        alt={input.alt}
        onChange={handleInput}
      />
      <button
        className="btn btn-outline-primary col-1 mt-4"
        onClick={handleUpdateCardClick}
      >
        Update Card
      </button>
    </div>
  );
}

export default UpdateCardPage;
