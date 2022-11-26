import { useLocation, Navigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const auth = false; //useAuth - custom hook
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <div></div>;
};

export { RequiredAuth };
