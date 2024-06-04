import { useNavigate } from 'react-router-dom';
import "../Container.css";


const Error = () => {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate('/');
  };

  return (
    <div className="any-container to-do-list">

      <h2> Error </h2>
      <p>Sorry, an error occurred. Please return to the home page.</p>
      <button onClick={returnToHome}>Return to Home</button>
    </div>
  );
};

export default Error;
