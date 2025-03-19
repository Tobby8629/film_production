

import { useState, useEffect } from 'react';

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0, // Default value before `window` is available
    height: 0,
  });

  const [screen, setScreen] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only in the browser

    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      });

      // Update screen type
      if (innerWidth < 768) {
        setScreen('mobile');
      } else if (innerWidth < 1024) {
        setScreen('tablet');
      } else {
        setScreen('desktop');
      }
    };

    // Set initial values on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowSize, screen };
};

export default useResize;
