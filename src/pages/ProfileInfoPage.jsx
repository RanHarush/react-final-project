import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ProfileInfoPage = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    _id: "",
    biz: false,
  });

  // Information about a user
  useEffect(() => {
    axios
      .get("/users/userInfo")
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => console.log(`${err.message}. ${err.response.data}`));
  }, [isLogged]);

  return (
    <div
      style={{ minHeight: "85vh" }}
      className="row d-flex justify-content-center"
    >
      <div className="col-12 col-sm-6">
      <h1 className=" d-flex justify-content-center my-5">User Profile Info</h1>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">
            {isLogged ? (
              <>
                <b>Name:</b> {userInfo.name}
              </>
            ) : (
              ""
            )}
          </li>
          <li className="list-group-item">
            {isLogged ? (
              <>
                <b>Email:</b> {userInfo.email}
              </>
            ) : (
              ""
            )}
          </li>
          <li className="list-group-item">
            {isLogged ? (
              <>
                <b>ID:</b> {userInfo._id}
              </>
            ) : (
              ""
            )}
          </li>
          <li className="list-group-item">
            {isLogged ? (
              <>
                {" "}
                <b>Is Bussiness:</b>
                {` ${userInfo.biz ? userInfo.biz + "" : userInfo.biz + ""}`}
              </>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfoPage;
