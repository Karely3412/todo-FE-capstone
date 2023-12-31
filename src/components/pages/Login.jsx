import { useState } from "react";

import LoginImage from "../../assets/images/login-image.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="image-wrapper">
        <img className="image" src={LoginImage} alt="random" />
      </div>
      <div className="login-wrapper">
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
