import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../../../images/logo.svg';

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

export const CardWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 36px;
  width: 380px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  animation: ${fadeIn} 0.5s linear;
`;

export const CardLogo = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const CardImage = styled.div`
  margin-bottom: 18px;
  width: 308px;
`;

export const CardAvatarLine = styled.div`
  position: relative;
  margin-bottom: 62px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardAvatarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled(Tweets)`
  margin-bottom: 26px;
`;

export const BtnFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background: #5cd3a8;
  }
`;

export const BtnFollowing = styled(BtnFollow)`
  background: #5cd3a8;
  &:hover,
  :focus {
    background: #ebd8ff;
  }
`;
