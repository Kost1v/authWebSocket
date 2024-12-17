import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { app } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/slice";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password:string) => {
    const auth = getAuth(app);
    console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
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

  return <Form title="Sing up" handleClick={handleRegister} />;
};

export default RegistrationForm;
