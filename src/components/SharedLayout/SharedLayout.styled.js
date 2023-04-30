import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
  border: 1px solid tomato;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #453c67;
`;

export const StyledLink = styled(NavLink)``;
