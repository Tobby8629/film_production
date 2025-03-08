import { useState, useEffect } from 'react';

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screen, setScreen] = useState<'mobile' | 'tablet' | 'desktop'>(
    window.innerWidth < 768
      ? 'mobile'
      : window.innerWidth < 1024
      ? 'tablet'
      : 'desktop'
  );

  useEffect(() => {
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowSize, screen };
};

export default useResize;
