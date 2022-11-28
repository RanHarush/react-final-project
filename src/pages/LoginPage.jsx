import axios from "axios";
import Input from "partials/Input";
import handleInputChange from "functions/inputChange";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import loginSchema from "validation/login.validation";
import validate from "validation/validation";
import useAutoLogin from "hooks/useAutoLogin";

const LoginPage = () => {
  const history = useHistory();
  const autoLogin = useAutoLogin();
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const handleUserInputChange = (ev) => {
    handleInputChange(ev, setUserInput);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validate(userInput, loginSchema);
    let errorMsg = "";
    if (error) {
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "string.min":
            errorMsg += ` ${errorItem.context.label} must be at list ${errorItem.context.limit} characters long. `;
            break;
          case "string.max":
            errorMsg += ` ${errorItem.context.label} must be less than or equal to ${errorItem.context.limit} characters long. `;
            break;
          default:
            errorMsg += "Something went Wrong";
            break;
        }
      }
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    axios
      .post("/users/login", userInput)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        autoLogin();
        history.push("/");
        toast.success("🦄 You have Logged in!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        if (err.response.data === "Invalid email or password.") {
          toast.error("Invalid email or password.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("🙊 Something went Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="row d-flex flex-column justify-content-center align-items-center mt-5"
        style={{ minHeight: "85vh" }}
      >
        <div className="col col-sm-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <Input
            type="email"
            placeholder="name@example.com"
            id="email"
            value={userInput.email}
            onChange={handleUserInputChange}
          />
          <label htmlFor="password" className="form-label mt-4">
            Password
          </label>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            value={userInput.password}
            onChange={handleUserInputChange}
          />
          <button className="btn btn-outline-success mt-4">Submit</button>
        </div>
        <div className="col col-sm-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4522/4522094.png"
            alt="welcome back"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
