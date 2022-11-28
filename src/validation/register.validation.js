import Joi from "joi-browser";

const registerSchema = {
  name: Joi.string().min(3).max(60).required().label("Name"),
  email: Joi.string().email().min(6).max(60).required().label("Email"),
  password: Joi.string().min(6).max(20).required().label("Password"),
  biz: Joi.label("Biz"),
};

export default registerSchema;
