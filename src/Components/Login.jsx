import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(localStorage.getItem("user"));

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      setAuth("user", JSON.stringify(result));
    } else {
      alert("Please enter correct details");
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        value={email}
        className="inputBox"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        className="inputBox"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signUp" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
