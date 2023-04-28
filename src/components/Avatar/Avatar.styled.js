import styled from 'styled-components';
import Image from '../Image/Image';

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarUser = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
