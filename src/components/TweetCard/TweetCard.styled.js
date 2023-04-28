import styled from 'styled-components';

import { ReactComponent as Logo } from '../../images/logo.svg';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px solid tomato;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 36px;
  width: 380px;
  /* height: 460px; */
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
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
