import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '@/constants/breakpoints';

const useCheckMobile = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= BREAKPOINTS.medium;
};

export default useCheckMobile;