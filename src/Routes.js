import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from 'shared/hoc/PrivateRoutes';
import WasteTypes from './pages/WasteTypes';

const HomePage = lazy(() => import('pages/HomePage'));
const FindServicePage = lazy(() => import('pages/FindServicePage'));
const AboutUsPage = lazy(() => import('pages/AboutUsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ProfileServicePage = lazy(() => import('pages/ProfileServicePage'));
const RegisterWastePage = lazy(() => import('pages/RegisterWastePage'));
const OurTeamPage = lazy(() => import('pages/OurTeamPage'));
const OrdersBoardPage = lazy(() => import('pages/OrdersBoardPage'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<FindServicePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/wasteTypes" element={<WasteTypes />} />

        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <ProfileServicePage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <OrdersBoardPage />
            </PrivateRoutes>
          }
        />
        <Route
          path="/waste"
          element={
            <PrivateRoutes>
              <RegisterWastePage />
            </PrivateRoutes>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
