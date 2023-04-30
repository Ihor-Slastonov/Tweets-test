import React from 'react';
import { AvatarWrapper, AvatarUser, AvatarImg } from './Avatar.styled';

function Avatar({ avatar }) {
  return (
    <AvatarWrapper>
      <AvatarUser>
        <AvatarImg src={avatar} alt="User avatar" w="62" />
      </AvatarUser>
    </AvatarWrapper>
  );
}

export default Avatar;
