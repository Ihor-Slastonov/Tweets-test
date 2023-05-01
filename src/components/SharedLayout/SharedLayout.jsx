import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import {
  Container,
  Header,
  Footer,
  AppContainer,
  Content,
  FooterText,
  FooterTextWrapper,
  Link,
} from './SharedLayout.styled';
import Navigation from '../Navigation/Navigation';
import Image from '../Image/Image';

function SharedLayout() {
  return (
    <AppContainer>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Content>
          <Outlet />
        </Content>
      </Suspense>
      <Footer>
        <Container>
          <FooterTextWrapper>
            <FooterText>
              &copy; This project is made as a test task for GoIT. You can visit
              the{' '}
              <Link
                href="https://github.com/Ihor-Slastonov/Tweets-test"
                target="_blank"
                rel="noreferrer"
              >
                repository
              </Link>{' '}
              to check it out.
            </FooterText>
            <a
              href="https://github.com/Ihor-Slastonov/Tweets-test"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="github-mark-white.svg" alt="github cat" w={20} />
            </a>
          </FooterTextWrapper>
        </Container>
      </Footer>
    </AppContainer>
  );
}

export default SharedLayout;
