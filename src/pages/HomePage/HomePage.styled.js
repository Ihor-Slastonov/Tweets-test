import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 0;
  flex: 1;
`;

export const Title = styled.h1`
  text-align: center;
  color: #2c217d;
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 30px;
  padding: 30px 20px;
  max-width: 800px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const AboutText = styled.p`
  max-width: 400px;
  margin-left: 24px;
  font-size: 18px;
  text-align: 1.2;
  color: #ebd8ff;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const GoTweetsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  margin: 0 auto;
  max-width: 240px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background: #5cd3a8;
  }
`;
