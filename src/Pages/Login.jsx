import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState([]);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  let { username, password } = userDetails;

  const hnadleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let loggedIn = loginDetails.find((ele, id) => {
      if (ele.username == username && ele.password == password) {
        return true;
      }
    });
    if (loggedIn) {
      toast.success("logged in sucessfully");
      navigate("/users");
    } else {
      toast.error("invalid credential");
    }
  };

  const fetchCredential = async () => {
    let { data } = await axios.get("http://localhost:3000/credentials");
    // console.log(data);
    setLoginDetails(data);
  };

  useEffect(() => {
    fetchCredential();
    // setLoginDetails()
  }, []);
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">User Name : </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={hnadleChange}
          value={username}
        />
        <br />
        <label htmlFor="Password">Password : </label>
        <input
          type="Password"
          name="password"
          id="Password"
          onChange={hnadleChange}
          value={password}
        />
        <br />
        <input type="submit" value="Login" className="form-button" />
      </form>
    </div>
  );
};

export default Login;
