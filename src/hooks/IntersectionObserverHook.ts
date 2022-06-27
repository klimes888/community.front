import { useState, useEffect } from 'react';

export default function IntersectionObserverHook({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
}) {
  const [obserResult, setObserResult] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entres => {
        const [entry] = entres;
        console.log('observe', entres);
        setObserResult(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );
    if (root?.current) observer.observe(root.current);
    return () => {
      if (root?.current) observer.observe(root.current);
    };
  }, [root, rootMargin, threshold]);

  return obserResult;
}
