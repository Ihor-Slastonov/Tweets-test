import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { Container, Header } from './SharedLayout.styled';
import Navigation from '../Navigation/Navigation';

function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

export default SharedLayout;
