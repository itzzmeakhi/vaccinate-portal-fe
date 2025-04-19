import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useAnimation } from "framer-motion";

import './Gallery.scss';

const Gallery = ({ images }) => {
  const galleryRef = useRef(null);
  const controls = useAnimation();
  const [inCompView, setCompInView] = useState(false);
  const componentClassName = 'gallery';

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(([entry]) => {
      setCompInView(entry.isIntersecting);
    }, { threshold: 0.5 });

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
      observerRefValue = galleryRef.current;
    }

    return () => {
      if (observerRefValue.current) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  useEffect(() => {
    if (inCompView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [inCompView, controls]);

  return (
    <div 
      ref={galleryRef} 
      className={`${componentClassName}`}>
      <Motion.div
        animate={controls}
        style={{ display: "flex" }}
      >
        {[...images, ...images].map((src, index) => (
          <div className={`${componentClassName}-img-container`}>
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index+1} of ${images.length}`}
            />
          </div>
        ))}
      </Motion.div>
    </div>
  );
};

export default Gallery;
