import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useState(localStorage.getItem("user"));

  useEffect(() => {
    // const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  const collectData = async () => {
    console.log(name, email, password);
    const result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let res = await result.json();
    console.log(res);
    localStorage.setItem("user", JSON.stringify(res));
    setAuth("user", JSON.stringify(res));
    if (res) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1> Register </h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="signUp" onClick={collectData}>
        Sign Up
      </button>
      {name + email + password}
    </div>
  );
};

export default SignUp;
