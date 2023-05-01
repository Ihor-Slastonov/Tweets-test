import React from 'react';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';
import Image from '../../components/Image/Image';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import {
  Section,
  Title,
  AboutWrapper,
  AboutText,
  GoTweetsLink,
} from './HomePage.styled';

function HomePage() {
  return (
    <Section>
      <Container>
        <Title>Welcome to GoIT Tweets</Title>
        <AboutWrapper>
          <Image src="tweet-card-image.png" alt="mark" w={300} />
          <AboutText>
            Hi, my name is Ihor Slastonov, and this project was created as a
            test for the GoIT technical interview. There are tweets here that
            you can subscribe to and sort through. There's currently no way to
            create your own, but you can take a look at the ones you already
            have! You can also{' '}
            <a
              href="https://github.com/Ihor-Slastonov/Tweets-test"
              target="_blank"
              rel="noreferrer"
            >
              visit the GitHub repository
            </a>{' '}
            to check it out. Thanks for your attention and stay tuned!
          </AboutText>
        </AboutWrapper>
        <GoTweetsLink to="tweets">
          Go to tweets<ArrowRightCircleIcon width={42}/>
        </GoTweetsLink>
      </Container>
    </Section>
  );
}

export default HomePage;
