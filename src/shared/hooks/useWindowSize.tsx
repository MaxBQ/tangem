import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', setSize);

    return () => window.removeEventListener('resize', setSize);
  }, [setWindowSize]);

  return windowSize;
}

export default useWindowSize;
