import React from 'react';
import { GoBack } from './BackBtn.styled';
import { useLocation, useNavigate } from 'react-router-dom';

function BackBtn({ children }) {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const onGoBack = () => navigate(backLink);

  return (
    <GoBack type="button" onClick={onGoBack}>
      {children}
    </GoBack>
  );
}

export default BackBtn;
