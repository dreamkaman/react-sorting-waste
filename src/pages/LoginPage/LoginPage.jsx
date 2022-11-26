import { useLocation, useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <main>
      <h2>Hello LoginPage!</h2>
      <p>You came from - {fromPage}</p>
    </main>
  );
};

export default LoginPage;
