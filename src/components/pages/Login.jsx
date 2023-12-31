import LoginImage from "../../assets/images/login-image.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-wrapper">
        <img className="image" src={LoginImage} alt="random" />
      </div>
      <div className="login-wrapper">
        <h1>Logo</h1>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
