const filterInput = (arr, setState, input) => {
  let regex = new RegExp(input, "i");
  let cardArrCopy = JSON.parse(JSON.stringify(arr));
  cardArrCopy = cardArrCopy.filter((item) => regex.test(item.title));
  setState(cardArrCopy);
};

export default filterInput;
