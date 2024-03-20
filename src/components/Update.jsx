import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  let { state } = useLocation();
  //   console.log(state);
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    id: state.id,
    login: state.login,
    email: state.email,
    phone: state.phone,
    avatar_url: state.avatar_url,
  });
  let { id, login, email, phone, avatar_url } = userDetails;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  let handleChange2 = (e) => {
    let { name, files } = e.target;
    setUserDetails({ ...userDetails, [name]: URL.createObjectURL(files[0]) });
  };
  // console.log(userDetails);
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${state.id}`, userDetails);
    navigate("/users");
  };
  //   console.log(id);
  return (
    <div className="create-user">
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="ids">id: </label>
          <input
            type="text"
            name="id"
            id="ids"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            name="login"
            id="username"
            onChange={handleChange}
            value={login}
          />
        </div>
        <div className="field">
          <label htmlFor="email">email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">phone: </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={phone}
          />
        </div>

        <div className="field">
          <label htmlFor="avatar">avatar: </label>
          <input
            type="file"
            name="avatar_url"
            id="avatar"
            accept=".jpg,.png"
            // value={avatar_url}
            onChange={handleChange2}
          />
        </div>
        <div className="btn">
          <input type="submit" value="update user" />
        </div>
      </form>
    </div>
  );
};

export default Update;
