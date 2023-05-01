import React, { useEffect, useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

import { ScrollWrapper, ScrollBg } from './BackToTopBtn.styled';

function BackToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <ScrollWrapper onClick={scrollToTop}>
          <ScrollBg>
            <ArrowUpCircleIcon color="#EBD8FF" />
          </ScrollBg>
        </ScrollWrapper>
      )}
    </>
  );
}

export default BackToTopBtn;
