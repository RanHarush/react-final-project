import React from "react";

const Input = ({ type, placeholder, value, id, onKeyUp, onChange, Class }) => {
  return (
    <div className={`form-floating ${Class}`}>
      <input
        className="form-control form-control-md"
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onKeyUp={onKeyUp}
        onChange={onChange}
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

export default Input;
