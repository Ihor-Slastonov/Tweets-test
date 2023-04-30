import React from 'react';
import { GoBack } from './BackBtn.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

function BackBtn({ children }) {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const handleGoBack = () => navigate(backLink);

  return (
    <GoBack type="button" onClick={handleGoBack}>
      <ArrowLeftCircleIcon width={20} height={20} />
      {children}
    </GoBack>
  );
}

export default BackBtn;
