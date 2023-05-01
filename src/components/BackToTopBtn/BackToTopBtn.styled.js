import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #5cd3a8;
  z-index: 999;
  animation: ${fadeIn} 0.5s linear;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    right: 2%;
  }
  @media screen and (min-width: 1199px) {
    right: 15%;
  }
`;

export const ScrollBg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: #373737;
`;
