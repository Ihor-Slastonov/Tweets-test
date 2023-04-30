import React from 'react';
import { Nav, StyledLink } from './Navigation.styled';
import { HomeIcon } from '@heroicons/react/24/outline';

function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">
        <HomeIcon width={20} height={20} />
        Home
      </StyledLink>
      <StyledLink to="tweets">Tweets</StyledLink>
    </Nav>
  );
}

export default Navigation;
