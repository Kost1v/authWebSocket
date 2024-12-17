import { useSelector } from "react-redux";
import ListWebSocket from "../../components/WebSocket/listWebSocket";
import { selectEmail } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SocketPage = () => {
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userEmail) {
      navigate("/login");
    }
  }, [userEmail, navigate]);
  if (!userEmail) {
    return null; 
  }
  
  return (
    <div>
      <h1>Socket Page</h1>
      <ListWebSocket />
    </div>
  );
};

export default SocketPage;
