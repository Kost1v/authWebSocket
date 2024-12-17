import { useSelector } from "react-redux";
import ListWebSocket from "../../components/WebSocket/listWebSocket";
import { selectEmail } from "../../redux/auth/selectors";
// import { useNavigate } from "react-router-dom";

const SocketPage = () => {
  const userEmail = useSelector(selectEmail);
  // const navigate = useNavigate();

  console.log(userEmail);
  
  return (
    <div>
      <ListWebSocket />

      {/* {userEmail ? (
        <div>
          <ListWebSocket />
        </div>
      ) : (
        navigate("/login")
      )} */}
    </div>
  );
};

export default SocketPage;
