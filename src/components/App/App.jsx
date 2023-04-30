import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SharedLayout from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Tweets = lazy(() => import('../../pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
