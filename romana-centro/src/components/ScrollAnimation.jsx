import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children }) {
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
}