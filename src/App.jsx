import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import BizGuardRoute from "Guard/BizGuardRoute";
import LoginGuardRoute from "Guard/LoginGuardRoute";
import useAutoLogin from "hooks/useAutoLogin";
import AboutPage from "pages/about/AboutPage";
import AddCardPage from "pages/AddCardPage";
import BusinessPage from "pages/BusinessPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import MyCardsPage from "pages/MyCardsPage";
import Page404 from "pages/Page404";
import ProfileInfoPage from "pages/ProfileInfoPage";
import RegisterPage from "pages/RegisterPage";
import UpdateCardPage from "pages/UpdateCardPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { authActions } from "store/auth";

const App = () => {
  const loading = useSelector((state) => state.auth.loading);
  const autoLogin = useAutoLogin();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      autoLogin();
    } else {
      dispatch(authActions.loading());
    }
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container">
        {loading ? (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/business" component={BusinessPage} />
            <LoginGuardRoute path="/profileInfo" component={ProfileInfoPage} />
            <BizGuardRoute path="/createCard" component={AddCardPage} />
            <BizGuardRoute path="/myCards" component={MyCardsPage} />
            <BizGuardRoute path="/updateCard/:id" component={UpdateCardPage} />
            <Route path="*" component={Page404} />
          </Switch>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default App;
