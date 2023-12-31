import { useState, useEffect } from "react";

import LoginImage from "../../assets/images/login-image.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8086/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="login-container">
      <div className="image-wrapper">
        <img className="image" src={LoginImage} alt="random" />
      </div>

      <div className="login-wrapper">
        <form className="login-form" action="">
          <h1>Logo</h1>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>

          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>

          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
