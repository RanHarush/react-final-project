import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "components/Card";

let initCardArr = [];

const MyCardsPage = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [card, setCard] = useState(initCardArr);

  // To receive all business cards of the registered user
  useEffect(() => {
    axios
      .get("/cards/my-cards")
      .then((res) => {
        initCardArr = res.data;
        setCard(initCardArr);
      })
      .catch((err) => console.log(err));
  }, [isLogged]);

  // To delete a business card
  const handleCardDelete = (id) => {
    axios
      .delete(`/cards/${id}`)
      .then(() => {
        initCardArr = initCardArr.filter((item) => item._id !== id);
        setCard(initCardArr);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div
      className="row mb-5"
      style={{ minHeight: "85vh" }}
    >
      <h1 className="d-flex justify-content-center mt-4">My Cards Page</h1>
      {initCardArr.map((item, idx) => (
        <div className="col-sm-3 mt-5" key={idx}>
          <Card
            id={item._id}
            title={item.title}
            subTitle={item.subTitle}
            description={item.description}
            url={item.image.url}
            alt={item.image.alt}
            address={item.address}
            phone={item.phone}
            onDelete={handleCardDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCardsPage;
