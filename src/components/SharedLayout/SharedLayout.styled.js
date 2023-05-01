import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Content = styled.main`
  flex: 1;
`;

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  border-bottom: 1px solid #ececec;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #453c67;
`;

export const Footer = styled.footer`
  padding: 16px 0;
  background-color: #453c67;
`;

export const FooterText = styled.p`
  margin-right: 10px;
  text-align: center;
  font-size: 16px;
  color: #ebd8ff;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-transform: uppercase;
  font-weight: 600;
`;
