import { useRef, useEffect, useCallback, useState } from 'react';

export default function addAnimation({ threshold = 0.7 }) {
  const [trigger, setTrigger] = useState(false);
  const targetDom = useRef(null);

  const handleScroll = useCallback(([entry]) => {
    // const { current } = targetDom;
    if (entry.isIntersecting) {
      setTrigger(true);
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = targetDom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: targetDom,
    trigger,
  };
}
