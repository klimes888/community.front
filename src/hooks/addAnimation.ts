import { useRef, useEffect, useCallback, useState } from 'react';

export default function addAnimation() {
  const [trigger, setTrigger] = useState(false);
  const targetDom = useRef();

  const handleScroll = useCallback(([entry]) => {
    // const { current } = targetDom;
    if (entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      setTrigger(true);
    }
  }, []);
  useEffect(() => {
    let observer;
    const { current } = targetDom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: targetDom,
    trigger,
  };
}
