import styled from 'styled-components';

export const BtnFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;

  background: #ebd8ff;
  /* background: ${p => p.bg}; */
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #5cd3a8;
  }
`;

export const BtnFollowing = styled(BtnFollow)`
  background: #5cd3a8;
  &:hover {
    background: #ebd8ff;
  }
`;
