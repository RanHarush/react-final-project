const sortSelect = (arr, setState, value) => {
  let cardArrCopy = JSON.parse(JSON.stringify(arr));
  if (value == 1) {
    cardArrCopy = cardArrCopy.sort((a, b) => {
      const x = a.title.toUpperCase();
      const y = b.title.toUpperCase();
      if (x > y) {
        return 1;
      } else if (x < y) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (value == -1) {
    cardArrCopy = cardArrCopy.sort((a, b) => {
      const x = a.title.toUpperCase();
      const y = b.title.toUpperCase();
      if (x > y) {
        return -1;
      } else if (x < y) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  setState(cardArrCopy);
};

export default sortSelect;
