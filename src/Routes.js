import { Route, Routes } from 'react-router-dom';

import FindServicePage from 'pages/FindServicePage';
import HomePage from 'pages/HomePage';
import AboutUsPage from 'pages/AboutUsPage';

const MyRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<FindServicePage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
};

export default MyRoutes;
