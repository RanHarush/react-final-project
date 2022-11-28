const handleInputChange = (ev, setState) => {
  setState((prev) => {
    prev[ev.target.id] = ev.target.value;
    return { ...prev };
  });
};

export default handleInputChange;
