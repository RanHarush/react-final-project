import axios from "axios";
import Input from "partials/Input";
import handleInputChange from "functions/inputChange";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authActions } from "store/auth";
import registerSchema from "validation/register.validation";
import validate from "validation/validation";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInputChange = (ev) => {
    handleInputChange(ev, setUserInput);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validate(userInput, registerSchema);
    if (error) {
      let errorMsg = "";
      for (let errorItem of error.details) {
        switch (errorItem.type) {
          case "string.min":
            errorMsg += ` ${errorItem.context.label} must be atleast ${errorItem.context.limit} characters long `;
            break;
          case "string.max":
            errorMsg += ` ${errorItem.context.label} must be less than or equal to ${errorItem.context.limit} characters long `;
            break;
          default:
            errorMsg += "Something went wrong";
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
      .post("/users/register", userInput)
      .then(() => {
        dispatch(authActions.registered());
        toast("🦄 Registered!", {
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
        if (err.response.data === "User already registered.") {
          toast.error("😅 User already registered.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("🙊 Something went wrong 400", {
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
        className="row d-flex align-items-center flex-column mt-5"
        style={{ minHeight: "85vh" }}
      >
        <div className="col-sm-6">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="Your full name"
            id="name"
            value={userInput.name}
            onChange={handleUserInputChange}
          />
          <label htmlFor="email" className="form-label mt-4">
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
          <button className="btn btn-outline-success my-4">Submit</button>
        </div>
        <div className="col-sm-6 my-5">
          <img
            src="https://media.istockphoto.com/vectors/welcome-to-the-team-hand-drawn-lettering-logo-icon-in-trendy-golden-vector-id1302839569?k=20&m=1302839569&s=612x612&w=0&h=rialOaZ0RMu1QsHjfUbZ0Q_d4LeAbIPz5V1SWpHi-yY="
            alt="welcome"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
