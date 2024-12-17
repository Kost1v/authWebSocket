import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <span>
        Haven't an account? <Link to="/register">Register</Link>
      </span>
    </div>
  );
};

export default LoginPage;
