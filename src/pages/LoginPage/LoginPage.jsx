import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <span>
        Haven't an account? <Link to="/register">Register</Link>
      </span>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
