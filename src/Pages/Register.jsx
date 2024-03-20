import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    phone: "",
    email: "",
    confirmPass: "",
  });
  let { username, password, phone, email, confirmPass } = userDetails;
  let confirmPassword = useRef();
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password != "" && password == confirmPassword.current.value) {
      toast.success("register successfully");
      setUserDetails({
        username: "",
        password: "",
        phone: "",
        email: "",
        confirmPass: "",
      });
      axios.post("http://localhost:3000/credentials", userDetails);
      navigate("/home/login");
    } else {
      toast.error("password does not match");
    }
  };

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name : </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={username}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone : </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={phone}
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPassword"
            ref={confirmPassword}
            onChange={handleChange}
            value={confirmPass}
          />
        </div>

        <input type="submit" value="Sign Up" className="form-button" />
      </form>
    </div>
  );
};

export default Register;
