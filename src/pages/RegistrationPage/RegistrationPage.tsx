import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <span>
        Already have an account? <Link to="/login">Sing In</Link>
      </span>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage