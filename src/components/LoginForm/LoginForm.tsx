import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../redux/auth/slice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return <Form title="Sing in" handleClick={handleLogin} />;
}

export default LoginForm