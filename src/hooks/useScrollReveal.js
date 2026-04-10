// Custom Hook — demonstrates Hooks concept
import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    // Cleanup — important for preventing memory leaks
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollReveal;
