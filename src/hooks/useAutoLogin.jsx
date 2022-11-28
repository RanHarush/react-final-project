import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "store/auth";

const useAutoLogin = () => {
  const dispatch = useDispatch();

  const autoLoginFunc = async () => {
    try {
      let { data } = await axios.get("/users/userInfo");
      if (data) {
        dispatch(authActions.login(data));
      }
      dispatch(authActions.loading());
    } catch (err) {
      console.log(err);
      dispatch(authActions.loading());
    }
  };
  return autoLoginFunc;
};

export default useAutoLogin;
