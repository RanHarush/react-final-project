import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const useUpdateUrlParams = () => {
  const history = useHistory();
  let { search } = useLocation();
  
  return (qParamWord, inputValue) => {
    let searchParams = new URLSearchParams(search);
    if (searchParams.has(qParamWord)) {
      searchParams.delete(qParamWord);
    }
    if (inputValue && inputValue !== "") {
      searchParams.append(qParamWord, inputValue);
    }
    searchParams = searchParams.toString();
    history.push(`?${searchParams}`);
  };
};

export default useUpdateUrlParams;
