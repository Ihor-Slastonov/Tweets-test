import React from 'react';

import Image from '../Image/Image';
import Avatar from '../Avatar/Avatar';

import {
  Container,
  CardWrapper,
  CardLogo,
  CardImage,
  CardAvatarLine,
  CardAvatarContainer,
  Tweets,
  Followers,
} from './TweetCard.styled';
import Button from '../Button/Button';

function TweetCard({ tweets, followers }) {
  const formatedFollowers = followers.toLocaleString('en-US');

  return (
    <Container>
      <CardWrapper>
        <CardLogo />
        <CardImage>
          <Image
            src="tweet-card-image.png"
            alt="question mark and check mark"
            w="308"
          />
        </CardImage>
        <CardAvatarLine>
          <CardAvatarContainer>
            <Avatar />
          </CardAvatarContainer>
        </CardAvatarLine>
        <Tweets>{tweets} Tweets</Tweets>
        <Followers>{formatedFollowers} Followers</Followers>
        <Button />
      </CardWrapper>
    </Container>
  );
}

export default TweetCard;
