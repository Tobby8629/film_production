
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStagger = <T extends HTMLElement>() => {
  const elementsRef = useRef<(T | null)[]>([]); // Allow null values

  useEffect(() => {
    elementsRef.current.forEach((element) => {
      if (!element) return; // Skip if null

      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Animate the paragraph inside the element
      const paragraph = element.querySelector("p");
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Animate the headText inside the element
      const headText = element.querySelector("h3");
      if (headText) {
        gsap.fromTo(
          headText,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });
  }, []);

  return elementsRef;
};

export default useStagger;
