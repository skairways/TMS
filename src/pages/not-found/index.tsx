import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>404 Page Not Found</div>
      <button onClick={handleReturn}>Return Back</button>
    </div>
  );
};

export default NotFoundPage;
