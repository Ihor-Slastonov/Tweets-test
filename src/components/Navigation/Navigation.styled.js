import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #ebd8ff;
  font-weight: 500;
  font-size: 16px;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #373737;
    background: #5cd3a8;
  }

  :hover:not(.active),
  :focus:not(.active) {
    background: #5cd3a8;
  }
`;
