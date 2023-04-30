import React, { useState } from 'react';

import Image from '../../Image/Image';
import Avatar from '../../Avatar/Avatar';

import {
  CardWrapper,
  CardLogo,
  CardImage,
  CardAvatarLine,
  CardAvatarContainer,
  Tweets,
  Followers,
  BtnFollow,
  BtnFollowing,
} from './TweetCard.styled';

function TweetCard({ tweets, followers, avatar, id }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(() => {
    const storedData = localStorage.getItem(id);
    if (storedData) {
      const { followersCount } = JSON.parse(storedData);
      return followersCount;
    }
    return followers;
  });

  const handleFollowClick = () => {
    setIsFollowing(true);
    setFollowersCount(prevCount => prevCount + 1);
    localStorage.setItem(
      id,
      JSON.stringify({ isFollowing: true, followersCount: followersCount + 1 })
    );
  };

  const handleUnfollowClick = () => {
    setIsFollowing(false);
    setFollowersCount(prevCount => prevCount - 1);
    localStorage.setItem(
      id,
      JSON.stringify({ isFollowing: false, followersCount: followersCount - 1 })
    );
  };

  const isUserFollowing = localStorage.getItem(id)
    ? JSON.parse(localStorage.getItem(id)).isFollowing
    : false;

  const formatedFollowers = followersCount.toLocaleString('en-US');

  return (
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
          <Avatar avatar={avatar} />
        </CardAvatarContainer>
      </CardAvatarLine>
      <Tweets>{tweets} Tweets</Tweets>
      <Followers>{formatedFollowers} Followers</Followers>
      {isFollowing || isUserFollowing ? (
        <BtnFollowing onClick={handleUnfollowClick}>Following</BtnFollowing>
      ) : (
        <BtnFollow onClick={handleFollowClick}>Follow</BtnFollow>
      )}
    </CardWrapper>
  );
}

export default TweetCard;
