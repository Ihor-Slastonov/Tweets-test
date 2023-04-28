import React from 'react';

function Image({ src, alt, w }) {
  return (
    <>
      <img src={require(`../../images/${src}`)} alt={alt} width={w} />
    </>
  );
}

export default Image;
