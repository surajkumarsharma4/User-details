import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateUser = () => {
  let [userDetails, setUserDetails] = useState({
    id: "",
    login: "",
    email: "",
    phone: "",
    avatar_url: "",
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
    axios
      .post("http://localhost:3000/users", userDetails)
      .then((resp) => toast.success("user added successfully"))
      .catch((err) => toast.error(`error: ${err}`));

    setUserDetails({
      login: "",
      id: "",
      email: "",
      phone: "",
      avatar_url:""
    });
  };
  return (
    <div className="create-user">
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="id">id: </label>
          <input
            type="text"
            name="id"
            id="id"
            onChange={handleChange}
            value={id}
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
            // value={userDetails.avatar}
            onChange={handleChange2}
          />
        </div>
        <div className="btn">
          <input type="submit" value="create user" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
