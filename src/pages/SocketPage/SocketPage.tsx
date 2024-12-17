import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ListWebSocket from "../../components/WebSocket/listWebSocket";

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
      <ListWebSocket />
    </div>
  );
};

export default SocketPage;
