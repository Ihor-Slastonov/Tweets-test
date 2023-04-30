import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { Container, Header, StyledLink } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="tweets">Tweets</StyledLink>
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
