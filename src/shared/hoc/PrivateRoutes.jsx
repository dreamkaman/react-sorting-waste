import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggined } from 'redux/auth/authSelectors';

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const auth = useSelector(isLoggined);
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export { PrivateRoutes };
