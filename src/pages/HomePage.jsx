import React from "react";
import Card from "components/Card";
import FilterSort from "components/FilterSort";
import { useState, useEffect } from "react";
import axios from "axios";
import filterInput from "functions/filterInput";
import sortSelect from "functions/sortSelect";
import useUpdateUrlParams from "hooks/useUpdateUrlParams";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

let initCardsArr = [];

const HomePage = () => {
  const [cards, setCards] = useState(initCardsArr);
  const updateUrlParams = useUpdateUrlParams();
  let { search } = useLocation();
  let searchParams = new URLSearchParams(search);

  // To receive all business cards
  useEffect(() => {
    axios
      .get("/cards/cards")
      .then((res) => {
        if (searchParams.has("filter")) {
          let filterParam = searchParams.get("filter");
          filterInput(res.data, setCards, filterParam);
          initCardsArr = res.data;
          return;
        }
        initCardsArr = res.data;
        setCards(initCardsArr);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (searchParams.has("sort")) {
      let sortParam = searchParams.get("sort");
      handleSort(sortParam);
    }
  }, [initCardsArr]);

  useEffect(() => {
    if (!searchParams.has("filter") && !searchParams.has("sort")) {
      handleFilter("");
    }
  }, [search]);

  const handleFilter = (input) => {
    filterInput(initCardsArr, setCards, input);
    updateUrlParams("filter", input);
  };

  const handleSort = (value) => {
    sortSelect(cards, setCards, value);
    updateUrlParams("sort", value);
  };

  return (
    <div style={{ minHeight: "85vh" }}>
      <FilterSort filterFunc={handleFilter} sortFunc={handleSort} />
      <div className="row mt-5">
        {cards.map((item) => (
          <div className="col-sm-3 mb-5" key={`card + ${item._id}`}>
            <Card
              id={item._id}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              url={item.image.url}
              alt={item.image.alt}
              address={item.address}
              phone={item.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
