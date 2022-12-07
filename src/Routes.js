import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoutes } from 'shared/hoc/PrivateRoutes';

const HomePage = lazy(() => import('pages/HomePage'));
const FindServicePage = lazy(() => import('pages/FindServicePage'));
const AboutUsPage = lazy(() => import('pages/AboutUsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const ProfileServicePage = lazy(() => import('pages/ProfileServicePage'));

const MyRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<FindServicePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <ProfileServicePage />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MyRoutes;
