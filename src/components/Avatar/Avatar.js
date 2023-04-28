import React from 'react';
import { AvatarWrapper, AvatarUser, AvatarImg } from './Avatar.styled';

function Avatar() {
  return (
    <AvatarWrapper>
      <AvatarUser>
        <AvatarImg src="hansel.png" alt="User avatar" w="62" />
      </AvatarUser>
    </AvatarWrapper>
  );
}

export default Avatar;
