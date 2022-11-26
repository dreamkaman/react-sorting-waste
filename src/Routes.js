import { Route, Routes } from 'react-router-dom';

import FindServicePage from 'pages/FindServicePage';
import HomePage from 'pages/HomePage';
import AboutUsPage from 'pages/AboutUsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import ProfileServicePage from 'pages/ProfileServicePage';
import { RequiredAuth } from 'shared/hoc/PrivateRoutes';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<FindServicePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/profile"
        element={
          <RequiredAuth>
            <ProfileServicePage />
          </RequiredAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MyRoutes;
