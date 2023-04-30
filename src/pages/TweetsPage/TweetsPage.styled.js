import styled from 'styled-components';

export const SectionTweets = styled.section`
  padding: 40px 0 96px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 22px;
  color: #2c217d;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
  padding: 14px 28px;
  width: 196px;

  border: none;
  border-radius: 20px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  color: #ebd8ff;
  background-color: #2c217d;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ebd8ff;
    color: #2c217d;
  }
`;
