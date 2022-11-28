import React, { useEffect, useRef, useState } from "react";
import Input from "partials/Input";

const FilterSort = ({ filterFunc, sortFunc }) => {
  const [filterInput, setFilterInput] = useState("");
  const [sortSelect, setSortSelect] = useState();
  const firstRenderRef = useRef(true);

  const handleFilterInputChange = (ev) => {
    setFilterInput(ev.target.value);
  };

  const handleSortSelectChange = (ev) => {
    setSortSelect(+ev.target.value);
  };

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    sortFunc(sortSelect);
  }, [sortSelect]);

  const handleFilterInputOnKeyUp = (ev) => {
    if (ev.code === "Enter") {
      filterFunc(filterInput);
    }
  };

  return (
    <>
      <div className="row row-cols-1 gap-3 d-flex justify-content-between mt-5">
        <div className="col col-sm-6">
          <Input
            type="text"
            placeholder="Search a card"
            value={filterInput}
            onKeyUp={handleFilterInputOnKeyUp}
            onChange={handleFilterInputChange}
          />
        </div>
        <div className="col-7 col-sm-3">
          <select
            className="form-select"
            value={sortSelect}
            onChange={handleSortSelectChange}
          >
            <option value="0">Sort Alphabettically</option>
            <option value="1">From A-Z</option>
            <option value="-1">From Z-A</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSort;
