import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children }) {
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          // Precarga recursos relacionados
          const images = entry.target.querySelectorAll('img[data-src]');
          images.forEach(img => {
            img.src = img.dataset.src;
          });
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px 200px 0px' // Carga 200px antes de entrar en vista
    });

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.6s ease-out',
        width: '100%',
        margin: '0'
      }}
    >
      {children}
    </div>
  );
}