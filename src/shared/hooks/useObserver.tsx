import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useObserver = <T extends HTMLElement | null>(ref: MutableRefObject<T>) => {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const observe = useRef<IntersectionObserver | null>(null);
  // const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      observe.current = new IntersectionObserver((entries) => {
        setIsVisible(entries[0].isIntersecting);
      });
      observe.current?.observe(ref.current);
    }
    return () => {
      observe.current?.disconnect();
      observe.current = null;
    };
  }, [ref]);
  return { isVisible };
};
