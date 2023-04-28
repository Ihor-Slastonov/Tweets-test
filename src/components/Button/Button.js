import React, { useState } from 'react';

import { BtnFollow, BtnFollowing } from './Button.styled';

function Button() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <>
      {isFollowing ? (
        <BtnFollow type="button" onClick={handleClick}>
          Follow
        </BtnFollow>
      ) : (
        <BtnFollowing type="button" onClick={handleClick}>
          Following
        </BtnFollowing>
      )}
    </>
  );
}

export default Button;
