import { useDispatch, useSelector } from "react-redux";
import { selectEmail } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/auth/slice";
import SocketPage from "../SocketPage/SocketPage";

const HomePage = () => {
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  return (
    <div>
      <h1>Home Page</h1>
      {userEmail ? (<div>
        <h3>Welcome, {userEmail}</h3>
        <button type="button" onClick={() => dispatch(removeUser())}>
          Log out
        </button>
        <SocketPage />
      </div>
      ) : navigate('/login')
      }
    </div>
  );
}

export default HomePage