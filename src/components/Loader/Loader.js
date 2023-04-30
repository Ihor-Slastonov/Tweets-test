import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

function Loader() {
  return (
    <LoaderContainer>
      <MutatingDots
        height="100"
        width="100"
        color="#5736A3"
        secondaryColor="#EBD8FF"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </LoaderContainer>
  );
}

export default Loader;
