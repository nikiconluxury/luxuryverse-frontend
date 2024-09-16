// import React, { useRef, useEffect, useState } from 'react';

// const App = () => {
//   const [sectionRef, setSectionRef] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Update state based on whether the section is intersecting the viewport
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5, // Adjust this threshold as needed
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     // Cleanup function
//     return () => {
//       if (sectionRef) {
//         observer.unobserve(sectionRef);
//       }
//     };
//   }, [sectionRef]);

//   return (
//     <div>
//       <section ref={sectionRef} style={{ marginTop: isVisible ? '90px' : '0' }}>
//         {/* Your section content here */}
//       </section>
//     </div>
//   );
// }

// export default App;
import React, { useCallback, useEffect, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {}

const useIntersectionObserver = (options: IntersectionObserverOptions = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [element, setElement] = useState<Element | null>(null);

  const callbackRef = useCallback((node: Element | null) => {
    if (node !== null) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.5, ...options });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [element, options]);

  return [callbackRef, isVisible] as const;
};

const App: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div>
      <section ref={sectionRef} style={{ marginTop: isVisible ? '90px' : '0' }}>
        {/* Your section content here */}
      </section>
    </div>
  );
};

export default App;