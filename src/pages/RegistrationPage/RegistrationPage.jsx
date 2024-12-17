import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <span>
        Already have an account? <Link to="/login">Sing In</Link>
      </span>
    </div>
  );
}

export default RegistrationPage