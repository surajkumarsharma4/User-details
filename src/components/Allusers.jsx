import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Allusers = () => {
  let [gitdata, setGitdata] = useState([]);
  let [del, setDel] = useState(0);
  let fetchdata = async () => {
    let { data } = await axios.get("http://localhost:3000/users");
    // console.log(data);
    setGitdata(data);
  };
  let deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`);
    // const filterdata = state.filter((ele) => ide !== ele.id);
    // setState(filterdata);
    setDel([]);
  };
  useEffect(() => {
    fetchdata();
  }, [del]);
  // console.log(state);
  // console.log(del);
  return (
    <section className="data">
      {gitdata.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        gitdata.map((ele, ind) => {
          return (
            <section key={ind + 1} className="card">
              <p>{ele.id}</p>
              <p>{ele.login}</p>
              <img src={ele.avatar_url} alt="" />
              <div className="btn">
                <Link to={"/users/view"} state={ele}>
                  View
                </Link>
                <Link to={"/users/updateusers"} state={ele}>
                  Update
                </Link>
                <button onClick={() => deleteUser(ele.id)}>Delete</button>
              </div>
            </section>
          );
        })
      )}
    </section>
  );
};

export default Allusers;
